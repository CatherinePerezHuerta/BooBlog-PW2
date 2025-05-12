const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 5005;

app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB');
        console.log(error);
    }
}

connectDB();

app.use('/',(req,res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});