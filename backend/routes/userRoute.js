

import express from 'express';
import { adminLogin, userRegister, userSignIn } from '../controllers/userControllers.js';

const userRouter = express.Router();


userRouter.post('/register',userRegister)
userRouter.post('/signIn',userSignIn)
userRouter.post('/admin',adminLogin)





export default userRouter ;





