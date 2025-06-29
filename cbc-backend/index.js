import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js'; // Adjust the path as necessary
import productRouter from './routes/productRouter.js'; // Adjust the path as necessary
import userRouter from './routes/userRouter.js';

 const app = express();
 
 const mongoURL ="mongodb+srv://admin:1234@cluster0.ktnvd45.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 mongoose.connect(mongoURL, {});
const connection = mongoose.connection;

 connection.once('open', () => {
    console.log('Connected to MongoDB');
 });

 app.use(bodyParser.json());

 app.use('/api/students', studentRouter); 

 app.use('/api/products', productRouter);

 app.use('/api/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});