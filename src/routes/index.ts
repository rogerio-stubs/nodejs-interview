import { Router } from "express";
import { citiesRoutes } from "./cities.routes";
import { customersRoutes } from "./customers.routes";

const router = Router();

router.use("/cities", citiesRoutes);
router.use("/customers", customersRoutes);

export { router };