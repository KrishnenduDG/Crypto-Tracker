import { Request, Response, Router } from "express";
import { failureLabel } from "../constants";
import { CryptoController } from "../controllers";

const cryptoRouter = Router();

cryptoRouter.get("/stats", CryptoController.handleGetStats);

export default cryptoRouter;
