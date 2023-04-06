import express from 'express';
import tasksRoutes from './routes/tasks';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUI from 'swagger-ui-express';
import cors from 'cors';
import { options } from './swaggerOptions';

const specs = swaggerJSDoc(options);

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(tasksRoutes);

app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(specs));

export default app;
