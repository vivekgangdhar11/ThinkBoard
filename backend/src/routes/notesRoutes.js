import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);


router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
//MCK7YINIqSvswcyh
//mongodb+srv://believevivek11:MCK7YINIqSvswcyh@cluster0.98ngkcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0