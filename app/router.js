import Router from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from API");
});

router.post("/", (req, res) => {
  res.json(req.body);
});

export default router;
