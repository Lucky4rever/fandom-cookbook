import { Router } from "express";
import fandomsController from "../controllers/fandoms.controller";

const fandomsRouter: Router = Router();

fandomsRouter.get('/fandoms-highlights', fandomsController.getFandomHighights.bind(fandomsController));

fandomsRouter.get('/fandom/:fandom', fandomsController.getFandomByFandomName.bind(fandomsController));

export default fandomsRouter;
