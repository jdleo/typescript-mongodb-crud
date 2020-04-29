import * as mongoose from 'mongoose';
import { UserModel } from '../models/userModel';
import { Request, Response } from 'express';

// create user instance
const User = mongoose.model('User', UserModel);

// user controller
export class UserController {
    // get users
    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user: mongoose.Document) => {
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
        newUser.save((err, user: mongoose.Document) => {
            if (err) {
                // error
                res.send(err);
            } else {
                // send user
                res.json(user);
            }
        });
    }

    // delete user
    public deleteUser(req: Request, res: Response) {
        // get ID of user to delete
        const userId: string = req.params.id;

        // delete from db
        User.deleteOne({ _id: userId }, err => {
            if (err) {
                // error
                res.send(err);
            } else {
                // send response
                res.sendStatus(200);
            }
        });
    }

    // update user
    public updateUser(req: Request, res: Response) {
        // get ID of user to update
        const userId: string = req.params.id;

        // update in db
        User.update(
            { _id: userId },
            req.body,
            (err, user: mongoose.Document) => {
                if (err) {
                    // error
                    res.send(err);
                } else {
                    // send user
                    res.send(user);
                }
            }
        );
    }
}
