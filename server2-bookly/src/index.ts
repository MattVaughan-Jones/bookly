import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
import { sequelize } from './database/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('This is a server');
});

app.use(
  '/',
  routes,
  cors(),
  bodyParser.json()
)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  sequelize.authenticate().then(async() => {
  })
  .catch((e: any) => {
    console.log(e.message);
  })
});
