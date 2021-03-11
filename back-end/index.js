import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


import postRoutes from './routes/posts.js'
import productsRoutes from './routes/products.js'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: false}));
app.use(cors());
dotenv.config();

app.use('/posts',postRoutes);
app.use('/product',productsRoutes);
app.use('/user',usersRoutes);
app.use('/auth',authRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);
