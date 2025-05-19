import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import moviesRouter from './routes/movies.js';

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_STRING);
const database = mongoose.connection;

// Middlewares
app.use(express.json());

// Routes
app.use('/api/movies', moviesRouter);

database.on('error', (error) => console.log(error));

database.once('connected', () => {
    console.log('DB Connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
