const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const connectDb = require('./database/db');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const filterRoutes = require('./routes/filter');
// const orderRoutes = require('./routes/order');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/uploads',express.static('uploads'));
app.use('/api/filter/', filterRoutes);
// app.use('/api/order/', orderRoutes);


connectDb();


const port = process.env.PORT || 5000;
app.listen(port, () => console.log( ` Listening on port ${port} `)); 


