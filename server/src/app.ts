import express from 'express';
import cors from 'cors';
import hello from './routes/hello';

const app = express();

app.use(cors());

app.use("/api/hello", hello);


export default app;