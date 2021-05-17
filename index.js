import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

app.get('/', (req, res) => {
  res.send('Snippet API');
})

mongoose
  .connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 5000, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
