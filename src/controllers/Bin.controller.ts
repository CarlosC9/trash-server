import { Request, Response } from 'express';
import BinsModel from '../models/Bins.model';

class BinController {

    public getAllTrash(req : Request, res : Response) {
        BinsModel.findAll().then((binds) => {
            res.send(binds);
        })
    }

    public async getBinByType(req : Request, res : Response) {
        const { binTypeId } = req.body;
        if(!binTypeId) res.status(300).send('Bad Request: binTypeId undefinded');
        let bins = await BinsModel.findAll({ where: { binTypeId : binTypeId } });
        return res.status(200).send(bins);
    }

}

export const binController = new BinController();