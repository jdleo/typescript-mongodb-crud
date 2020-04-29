import { Request, Response } from 'express';

export class Routes {
    /**
     * @param app : app to be used for these routes
     */
    public routes(app): void {
        // base route
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello, world!',
            });
        });
    }
}
