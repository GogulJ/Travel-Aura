import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3050;

// ✅ Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB Connected");
    console.log("MongoDB URL:", process.env.MONGO_URL);
    console.log("Connected to DB:", mongoose.connection.name);
  } catch (error) {
    console.log("❌ MongoDB Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

connectDB(); // ✅ Call DB

// ✅ CORS
const allowedOrigins = [
  "https://trips-travel.vercel.app",
  "http://localhost:5173",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tour", tourRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/booking", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Trips & Travels API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
