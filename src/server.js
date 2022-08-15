import dotenv from 'dotenv';
dotenv.config({ path: '/Users/shafiulmirza/Documents/digitalfutures/challenges/DFXtra/DFXtraGroup1-BackEnd/src/.env.development' });
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import { home } from './routes/home.js'
import { graduate } from './routes/graduate.js';

// dotenv.config({ path: `../.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))


app.use(`/`, home)
app.use(`/graduate`, graduate)

const main = async () => {
    await mongoose.connect(DB_URI).then(res => {
        console.log("DB connected")
    })
}

main().then(() => console.log(`Connected to DB`)).catch(err => console.log(err));

const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default server;