import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import route from "./routes";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || '';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', route);

mongoose.connect(MONGODB_URL)
.then((con)=> console.log('db is connected.', con.connection.host))
.then(() => app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`)))
.catch((err) => console.log(err.message));

export default app;
