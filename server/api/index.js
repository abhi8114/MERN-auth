import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRoutes from '../routes/auth.route.js';
import authRoutes from '../routes/auth.route.js';
dotenv.config();

const password = encodeURIComponent(process.env.PASSWORD);
const dbName = encodeURIComponent(process.env.DB_NAME);
const conn = encodeURIComponent(process.env.CONNECTION);
const username = encodeURIComponent(process.env.USER_NAME);
const appname = encodeURIComponent(process.env.APPNAME);


console.log(process.env.APPNAME)
console.log(process.env.DB_NAME)
console.log(process.env.CONNECTION)
console.log(process.env.USER_NAME)

const connectionString = `mongodb+srv://${username}:${password}@${conn}/${dbName}?retryWrites=true&w=majority&appName=${appname}`;


mongoose.connect(connectionString)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
/**
 * Middleware to parse URL-encoded request bodies.
 * This middleware is used to parse the request body when it is sent in URL-encoded format,
 * such as from an HTML form submission. It makes the parsed data available on the `req.body` object.
 * The `extended: true` option allows for parsing of rich objects and arrays.
 */
app.use(express.urlencoded({ extended: true }));

app.listen(8000, () => {
    console.log("hello world");
});

// app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);

