import { Request, Response, Router } from "express";
import { failureLabel } from "../constants";
import { CryptoController } from "../controllers";

const cryptoRouter = Router();

cryptoRouter
  .get("/stats", CryptoController.handleGetStats)
  .get("/deviation", CryptoController.handleGetPriceDeviation);

export default cryptoRouter;
