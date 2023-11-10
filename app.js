import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
const app = express();
import connectDB from "./db/connect.js";
import ugContents from "./routes/ug_sirdar.js";
import dummyRoutes from "./routes/dummy.js";
connectDB();
const PORT = process.env.PORT || 4100;
app.listen(PORT, (rea, res) => {
  console.log(`listening on port ${PORT}`);
});

app.use(
  cors({
    origin: "http://localhost:4100/",
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/dummy", dummyRoutes);
app.use("/ug_sirdar", ugContents);
// app.use("/blogs", blogs);
// app.use("/appointment", payment);
// app.use("/payment", payment);
