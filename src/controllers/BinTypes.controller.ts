import { Request, Response } from 'express';
import BinsTypeModel from '../models/BinsType.model';

class BinTypesController {

    public postBinType(req : Request, res : Response) {
        let binType = BinsTypeModel.build( {id_type: null, name : req.body.name } );
        binType.save()
        .then(() => {
            res.sendStatus(201);
        })
        .catch( () => {
            res.status(400).send("Bad");
        });
    }

}

export const binTypesController = new BinTypesController();