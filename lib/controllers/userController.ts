import * as mongoose from 'mongoose';
import { UserModel } from '../models/userModel';
import { Request, Response } from 'express';

// create user instance
const User = mongoose.model('User', UserModel);

// user controller
export class UserController {
    // get users
    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if (err) {
                // error
                res.send(err);
            } else {
                // send user
                res.json(user);
            }
        });
    }

    // add user
    public createUser(req: Request, res: Response) {
        // create new user
        const newUser: mongoose.Document = new User(req.body);

        // save in db
        newUser.save((err, user) => {
            if (err) {
                // error
                res.send(err);
            } else {
                // send user
                res.json(user);
            }
        });
    }
}
