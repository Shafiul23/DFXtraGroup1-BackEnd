import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import morgan from 'morgan';

import { home } from './routes/home.js'

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use(`/`, home)

const main = async () => {
    console.log(`Connecting to database...`)
}

main().then(() => console.log(`Connected to DB`)).catch(err => console.log(err));

const server = app.listen(4000, () => console.log(`Server started`));

export default server;