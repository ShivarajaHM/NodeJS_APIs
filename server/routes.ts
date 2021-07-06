import express from "express";
import PingController from "./controllers/ping";
import sync from './controllers/sync';

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/test", async (_req, res) => {
    return res.send('Hello World');
  });

  router.get("/sync", async (_req, res) => {
    const response = await sync;
    console.log('MMMMMMMMMMMMMMMMM',response);
    
    return res.send(response);
  });

export default router;
