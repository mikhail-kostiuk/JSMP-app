import express, { Router } from 'express';

import { createNewChallenge } from '../controllers/challenges';

const router: Router = express.Router();

router.post('/', (req, res) => createNewChallenge(req, res));

export default router;
