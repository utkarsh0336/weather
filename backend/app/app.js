import express from "express";
import cors from 'cors'
const app = express();
app.use(cors());
import { globalErrhandler ,notFound} from "../middlewares/globalErrHandler.js";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoutes.js";
dbConnect();

app.use(express.json());
app.use("/api/v1/users/", userRoutes);
app.use(notFound);
app.use(globalErrhandler);
export default app;


