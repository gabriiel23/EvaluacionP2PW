import express from 'express';
import cors from 'cors';

import empleadoRoute from './routes/empleadoRoute.js';

import config from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS

app.use('/api', empleadoRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
