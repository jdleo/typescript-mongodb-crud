import { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

export class Routes {
    // user controller
    private userController: UserController = new UserController();

    /**
     * @param app : app to be used for these routes
     */
    public routes(app): void {
        // base route
        app.route('/').get((req: Request, res: Response) => {
            // send response
            res.status(200).send({
                message: 'Hello, world!',
            });
        });

        // user routes
        app.route('/user')
            .get(this.userController.getUsers)
            .post(this.userController.createUser)
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'PUT to /user',
                });
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'DELETE to /user',
                });
            });
    }
}
