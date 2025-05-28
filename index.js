import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";
import orderRouter from './routes/orderRoute.js';

const app = express();

//middeware
app.use(bodyParser.json())

app.use(
    (req,res,next)=>{
        const tokenString = req.header("Authorization")
        if(tokenString != null){
            const token = tokenString.replace("Bearer ", "")

            jwt.verify(token, "kavinda-pathum-#@1103",
                (err,decoded)=>{
                    if(decoded != null){
                        req.user = decoded
                        next()
                    }else{
                        res.status(403).json({
                            message : "Invalid token"
                        })
                    }
                }
            )
        }else{
            next()
        }
    }
)

//databse connnect
mongoose.connect("mongodb+srv://kavinda:12345@cluster0.rz4ayzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(
    ()=>{
        console.log("Connected to the database")
    }
).catch(
    ()=>{
        console.log("Database connection failed")
    }
)

app.use("/products" , productRouter)
app.use("/users" , userRouter)
app.use("/orders", orderRouter)

app.listen(3000,
    ()=>{
        console.log('Server is running on port 3000');
    }
)