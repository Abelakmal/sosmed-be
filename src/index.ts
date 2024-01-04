import express, { NextFunction, Request, Response } from 'express';
import usersRouters from './routers/usersRouters';
require('dotenv').config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json())
app.use('/api/users', usersRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
