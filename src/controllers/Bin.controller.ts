import { Request, Response } from 'express';
import BinsModel from '../models/Bins.model';

class BinController {

    public getAllTrash(req : Request, res : Response) {
        BinsModel.findAll().then((x) => {
            res.send(x);
        })
    }

}

export const binController = new BinController();