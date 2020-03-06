import { Request, Response } from 'express';
import BinsModel from '../models/Bins.model';

class BinController {

    public getAllTrash(req : Request, res : Response) {
        BinsModel.findAll().then((binds) => {
            res.send(binds);
        })
    }

    public testingVictor(req : Request, res : Response) {
        res.send('Rubish Bin Full');
        console.log(req.body);
    }

}

export const binController = new BinController();