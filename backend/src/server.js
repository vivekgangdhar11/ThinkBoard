import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Allow all origins since you’ll manually connect from frontend
app.use(express.json());

// Routes
app.use("/api/notes", notesRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
