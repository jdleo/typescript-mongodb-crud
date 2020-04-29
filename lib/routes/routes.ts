import { Request, Response } from 'express';

export class Routes {
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
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET to /user',
                });
            })
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'POST to /user',
                });
            })
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
