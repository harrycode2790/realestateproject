import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MONGOdb');
}).catch((err) => {
    console.log(err);
})
const app = express();


app.listen(3000, () => {
    console.log('server is working on port 3000!!!');
})