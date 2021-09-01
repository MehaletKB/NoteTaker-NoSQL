import Router from "express";
import noteController from "./contoller.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from API");
});

router.get("/notes", async (_, res) => {
  try {
    const notes = await noteController.index();
    res.json(notes);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/notes/:id", async (req, res) => {
  try {
    const noteById = await noteController.show(req.params.id);
    res.json(noteById);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/notes", async (req, res) => {
  try {
    const newNote = await noteController.create(req.body);
    res.json(newNote);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

export default router;
