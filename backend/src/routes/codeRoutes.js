import express from 'express';
import { generateCode } from '../controllers/codeController.js';
import { rateLimiter } from '../middleware/rateLimiter.js';
import { validateInput } from '../middleware/validateInput.js';

const router = express.Router();

router.post('/generate', rateLimiter, validateInput, generateCode);

export default router;