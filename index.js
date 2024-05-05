import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectDB.js"
import userRoutes from "./routes/userRoutes.js"
import weatherRoutes from "./routes/weatherRoutes.js"

dotenv.config()
connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

// cors configuration
var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// body parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// route middlewares
app.use("/api/users", userRoutes);
app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
