import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;
const CONNECT_URL = "mongodb+srv://adrianghub:adrianghub001@cluster0.ao8mk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false);