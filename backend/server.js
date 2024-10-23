import express from 'express';
import cors from 'cors';
import "dotenv/config";
import ConnectToMongoose from './config/MongoDB.js';
import connectCloudinary from './config/Cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRouter.js';

// config
const app = express();
const port = process.env.PORT || 4004;
ConnectToMongoose()
connectCloudinary()


// middlewares
app.use(express.json());
app.use(cors());

console.log('hello',Date.now());

// endpoints
app.use("/api/user",userRouter )
app.use("/api/product",productRouter)


app.get('/', (req, res) =>{
res.send("server works successfully");
})



app.listen(port);