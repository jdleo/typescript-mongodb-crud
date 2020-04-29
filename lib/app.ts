import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { Routes } from './routes/routes';

class App {
    public app: express.Application;
    public routes: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/tscrud';

    constructor() {
        this.app = express();
        this.config();

        // pass this app to routes file
        this.routes.routes(this.app);
        // set up mongoDB
        this.setupMongoDB();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private setupMongoDB(): void {
        // set global promise
        (<any>mongoose.Promise) = global.Promise;

        // connect to mongoDB
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;
