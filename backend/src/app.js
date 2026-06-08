import express from 'express';
import cors from 'cors';
import codeRoutes from './routes/codeRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Allow all origins temporarily to fix deployment
app.use(cors());

app.use(express.json({ limit: '10mb' }));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use('/api', codeRoutes);

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    environment: process.env.NODE_ENV 
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

