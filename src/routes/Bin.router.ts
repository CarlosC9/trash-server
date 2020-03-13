import { Router } from 'express';
import { binController } from '../controllers/Bin.controller';

const router : Router = Router();

router.get('/allBins' ,binController.getAllTrash);
router.get('/allBinsByType', binController.getBinByType);
router.get('/plastic', binController.getBinByPlastic);
router.get('/organic', binController.getBinByOrganic);
router.get('/glass', binController.getBinByGlass);
router.get('/paper', binController.getBinByPaper);

export default router;