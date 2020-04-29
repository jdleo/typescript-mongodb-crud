import { Request, Response } from 'express';

export class Routes {
    // to define routes
    public routes(app): void {
        // base route
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello, world!',
            });
        });
    }
}
