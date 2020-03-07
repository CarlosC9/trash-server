import { Router } from 'express';
import { binPrivateController } from '../controllers/BinsPrivate.controller';
import { verifyToken } from '../lib/verifyToken';

const router : Router = Router();

router.post('/', binPrivateController.postBinPrivate);
router.put('/full', binPrivateController.updateBinFull);
router.get('/userBin/full', verifyToken , binPrivateController.getAllBinFull);
router.get('/userBin/notFull', verifyToken , binPrivateController.getAllBinNotFull);
router.get('/userBin', verifyToken, binPrivateController.getAllBin);

export default router;