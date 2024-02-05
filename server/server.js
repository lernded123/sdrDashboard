import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/router.js";
const data = require("./data/mockData.js");

// Routes that you will change
// import dataRoutes from "./routes/data.js";
// import generalRoutes from "./routes/general.js";
// import managementRoutes from "./routes/management.js";
// import salesRoutes from "./routes/sales.js";

//data imports
// import User from "./models/User.js";
// import { dataUser } from "./data/mockData.js";

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
// Each route is set to a different section
// app.use("/data", dataRoutes);
// app.use("/general", generalRoutes);
// app.use("/management", managementRoutes);
// app.use("/sales", salesRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // ONLY ADD DATA ONE TIME
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));

//Middleware

//enable CORS
app.use(cors());
app.use("/", router);

//serve static files
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/mockData.js", async (req, res) => {
  console.log("/mockData");
  try {
    console.log("data sent");
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("error see server logs");
  }
});
