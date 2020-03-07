import { Router } from 'express';
import { userController } from '../controllers/User.controller'

const router : Router = Router();

router.post('/signup', userController.signUpUser);
router.post('/signin', userController.signInUser);

export default router;