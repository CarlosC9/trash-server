import { Request, Response } from 'express';

class TrashController {

    public getTrash(req : Request, res : Response) {
        res.send("Hello trash");
    }

}

export const trashController = new TrashController();