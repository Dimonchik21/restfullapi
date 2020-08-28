import * as express from 'express';
import { Request, Response } from 'express';

const routerSignUp = express.Router();

routerSignUp.post('/', (req: Request, res: Response): void => {
    res.send({ signup: 'signup' });
});

export default routerSignUp;