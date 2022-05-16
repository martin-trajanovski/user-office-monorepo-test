/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { logger } from '@user-office-software/duo-logger';
import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to user-office-backend!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  logger.logInfo(`Listening at http://localhost:${port}/api`, {});
});
server.on('error', logger.logError);
