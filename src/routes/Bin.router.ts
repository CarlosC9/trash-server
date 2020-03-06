import { Router } from 'express';
import { binController } from '../controllers/Bin.controller';

const router : Router = Router();

router.get('/allBins', binController.getAllTrash);

export default router;