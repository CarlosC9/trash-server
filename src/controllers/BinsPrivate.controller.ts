import { Request, Response } from 'express';
import BinsPrivateModel from '../models/BinsPrivate.model';

class BinPrivateController {

    public postBinPrivate(req : Request, res : Response) {
        const { name, full, longitude, latitude, binTypeId, userId } = req.body;
        let { description } = req.body;
        if(!description) description = null;
        if (!name || !full || !longitude || !latitude || !binTypeId || !userId) return res.status(400).send('Bad Request: name,'
        + 'full, longitude, user and/or latitude is null or undefined');
        let binType = BinsPrivateModel.build( {id_private_bin: null, full : full, longitude : longitude,
            latitude: latitude, binTypeId: binTypeId, description: description} );
        binType.save()
        .then(() => {
            res.status(201).send('OK');
        })
        .catch( () => {
            res.status(400).send("Bad Request: unexpected error");
        });
    }

    public async updateBinFull(req: Request, res: Response) {
        const { id_private_bin, full } = req.body;
        if (!id_private_bin || !full) return res.status(300).send('Bad Request: id_private_bin and full');

        let bin = await BinsPrivateModel.update({full : full}, {where : {id_private_bin : id_private_bin }});
        res.status(200).send(bin);
    }

    public async getAllBinFull(req: any, res: Response) {
        let bins = await BinsPrivateModel.findAll({where: { userId: req.userId, full: true }})
        return res.status(200).send(bins);
    }

    public async getAllBinNotFull(req: any, res: Response) {
        let bins = await BinsPrivateModel.findAll({where: { userId: req.userId, full: false }})
        return res.status(200).send(bins);
    }

    public async getAllBin(req: any, res: Response) {
        let bins = await BinsPrivateModel.findAll({where: { userId: req.userId}})
        return res.status(200).send(bins);
    }

    
}

export const binPrivateController = new BinPrivateController();