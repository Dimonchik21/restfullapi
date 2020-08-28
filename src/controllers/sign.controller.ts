import * as express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response): void => {
    const body: {login: string, password: string} = req.body;
    res.send({ signin: 'sign' , ...body});
});

router.post('/new_token', (req: Request, res: Response): void => {
    const body: {login: string, password: string, refreshToken: string} = req.body;
    res.send({ signin: 'new_token', ...body });
});

router.post('/signup', (req: Request, res: Response): void => {
    const body: {name: string, password: string, email: string} = req.body;
    res.send({ signup: 'signup', ...body });
});

export default router;