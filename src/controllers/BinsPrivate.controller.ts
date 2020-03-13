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

    public async getAllBinFullByType(req: any, res: Response) {
        if (!req.query.type) return res.status(300).send("Bad Request: undefined type");
        let bins = await BinsPrivateModel.findAll({where: { userId: req.userId, full: true, binTypeId: req.query.type }})
        return res.status(200).send(bins);
    }

    public async getAllBinNotFullByType(req: any, res: Response) {
        if (!req.query.type) return res.status(300).send("Bad Request: undefined type");
        let bins = await BinsPrivateModel.findAll({where: { userId: req.userId, full: false, binTypeId: req.query.type }})
        return res.status(200).send(bins);
    }

    public async getAllBin(req: any, res: Response) {
        let bins = await BinsPrivateModel.findAll({where: { userId: req.userId}})
        return res.status(200).send(bins);
    }

    public async getStateBinFull(req: Request, res: Response) {
        const { id_private_bin } = req.body;
        if(!id_private_bin) return res.status(300).send("Bad Request: id_private_bind undefined or null");
        let bin = await BinsPrivateModel.findOne({ where: { id_private_bin : id_private_bin } });
        if (!bin) return res.status(404).send("Not Found: Bin not found");
        return res.status(200).send({ full: bin.full });
    }
    
}

export const binPrivateController = new BinPrivateController();