import { Router } from 'express';
import { binPrivateController } from '../controllers/BinsPrivate.controller';
import { verifyToken } from '../lib/verifyToken';

const router : Router = Router();

router.post('/', binPrivateController.postBinPrivate);
router.put('/full', binPrivateController.updateBinFull);
router.get('/full', binPrivateController.getStateBinFull);
router.get('/userBin/full', verifyToken , binPrivateController.getAllBinFull);
router.get('/userBin/notFull', verifyToken , binPrivateController.getAllBinNotFull);
router.get('/userBin', verifyToken, binPrivateController.getAllBin);
router.get('/userBin/fullByType', verifyToken, binPrivateController.getAllBinFullByType);
router.get('/userBin/notFullByType', verifyToken, binPrivateController.getAllBinNotFullByType);

export default router;