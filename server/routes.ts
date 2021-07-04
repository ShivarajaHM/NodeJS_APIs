import express from "express";
import PingController from "./controllers/ping";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/test", async (_req, res) => {
    return res.send('Hello World');
  });

export default router;
