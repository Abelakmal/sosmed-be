import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import usersRouters from './routers/usersRouters';



const port = process.env.PORT || 8000;
const app = express();

dotenv.config()
app.use(express.json())
app.use(cors())
app.use('/api/users', usersRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
