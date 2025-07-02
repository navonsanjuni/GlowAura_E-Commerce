import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js'; 
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js'; 
import jwt from 'jsonwebtoken';
import e from 'express';


 const app = express();
 
 const mongoURL ="mongodb+srv://admin:1234@cluster0.ktnvd45.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 mongoose.connect(mongoURL, {});
const connection = mongoose.connection;

 connection.once('open', () => {
    console.log('Connected to MongoDB');
 });

 app.use(bodyParser.json());

 app.use(
    (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '')
        console.log(token);

        if(token !=null){
            jwt.verify(token, 'glowra-secret-key-7973', (error, decoded) => {
                if(!error){
                    console.log(decoded);
                    req.user = decoded;
                }
        })
    }
    next();
})


 app.use('/api/products', productRouter);

 app.use('/api/users', userRouter);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});