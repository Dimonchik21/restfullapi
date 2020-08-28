import { Router } from "express";
import auth from "./auth";
import user from "./user";

const routes = Router();

routes.use("/signin", auth);
routes.use("/user", user);

export default routes;