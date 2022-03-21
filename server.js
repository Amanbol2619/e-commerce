const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const connectDb = require('./database/db');
const authRoutes = require('./routes/auth');





app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use('/api/auth', authRoutes);


connectDb();


const port = process.env.PORT || 5000;
app.listen(port, () => console.log( ` Listening on port ${port} `)); 


