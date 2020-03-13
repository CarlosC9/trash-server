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


    public async getBinByOrganic(req : Request, res : Response) {
        let bins = await BinsModel.findAll({ where: { binTypeId : 1 } });
        return res.status(200).send(bins);
    }

    public async getBinByGlass(req : Request, res : Response) {
        let bins = await BinsModel.findAll({ where: { binTypeId : 2 } });
        return res.status(200).send(bins);
    }

    public async getBinByPaper(req : Request, res : Response) {
        let bins = await BinsModel.findAll({ where: { binTypeId : 3 } });
        return res.status(200).send(bins);
    }

    public async getBinByPlastic(req : Request, res : Response) {
        let bins = await BinsModel.findAll({ where: { binTypeId : 4 } });
        return res.status(200).send(bins);
    }


}

export const binController = new BinController();