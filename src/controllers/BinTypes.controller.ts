import { Request, Response } from 'express';
import BinsTypeModel from '../models/BinsType.model';

class BinTypesController {

    public postBinType(req : Request, res : Response) {
        let binType = BinsTypeModel.build( {id_type: null, name : req.body.name } );
        binType.save();
    }

}

export const binTypesController = new BinTypesController();