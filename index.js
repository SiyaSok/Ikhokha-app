import express from 'express'
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config({ path: './config/config.env' });

import connectDB from './config/db.js';
import ProductsEndpoints from './routes/ProductsRoutes.js';
import BlogsEndpoints from './routes/BlogsRoutes.js';
import UsersRoutes from './routes/UsersRoutes.js';


const app = express();

connectDB()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



app.use('/blog-posts', BlogsEndpoints)
app.use('/products-posts', ProductsEndpoints);
app.use('/users', UsersRoutes);

if (process.env.NODE_ENV === 'production') {



    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.htnm'));
    })


}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Runing on Port ${PORT}`);

})