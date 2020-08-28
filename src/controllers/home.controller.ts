import * as express from 'express';
import { Request, Response } from 'express';

const homeRouter = express.Router();

homeRouter.get('/', (req: Request, res: Response) => {
    res.json('Home');
});

export default homeRouter;