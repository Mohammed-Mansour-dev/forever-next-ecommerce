import express from 'express';
import cors from 'cors';
import "dotenv/config";
import ConnectToMongoose from './config/MongoDB.js';
import connectCloudinary from './config/Cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';

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
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get('/', (req, res) =>{
res.send("server works successfully");
})

console.log("👈")

app.listen(port, '0.0.0.0', () => {
    console.log('Backend server is running on http://your_local_IP:3001');
  });