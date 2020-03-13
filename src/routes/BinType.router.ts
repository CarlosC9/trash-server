import { Router } from 'express';
import { binTypesController } from '../controllers/BinTypes.controller'

const router : Router = Router();

// router.post('/', binTypesController.postBinType);
router.get('/allTypes', binTypesController.getAllBinTypes);


export default router;