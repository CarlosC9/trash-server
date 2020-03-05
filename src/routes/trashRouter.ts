import { Router } from 'express';
import { trashController } from '../controllers/trashController';

const router : Router = Router();

router.get('/', trashController.getTrash);



export default router;