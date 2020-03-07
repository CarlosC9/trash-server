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

    public async getAllBinTypes(req : Request, res : Response) {
        let allBinTypes = await BinsTypeModel.findAll();
        return res.status(200).send(allBinTypes);
    }

}

export const binTypesController = new BinTypesController();