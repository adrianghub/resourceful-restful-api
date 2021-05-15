import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js';

const app = express();

app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;
const CONNECT_URL = "mongodb+srv://adrianghub:adrianghub001@cluster0.ao8mk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false);