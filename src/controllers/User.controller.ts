import { Request, Response } from 'express';
import UserModel from '../models/User.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

class UserController {

    signUpUser(req : Request, res : Response) {
        try {
            bcrypt.hash(req.body.password, saltRounds).then((passwordHash) => {
                let newUser = UserModel.build({id_user : null, email: req.body.email, password: passwordHash});
                newUser.save().then( () => {
                    console.log(newUser.id_user);
                    console.log(newUser.password);
                    const token = jwt.sign({_id: newUser.id_user}, 'secretKey');
                    res.status(200).json({token});
                })
                .catch( () => {
                    res.status(400).send("Bad Request");
                });
            }).catch( () => {
                res.status(400).send("Bad Request");
            });
        } catch(e) {
            res.status(400).send("Bad Request");
        }
    }

    async signInUser(req : Request, res : Response) {

        const { email, password } = req.body;

        let user = await UserModel.findOne({where: {email :email}});
        console.log(user);
    }

}

export const userController = new UserController();