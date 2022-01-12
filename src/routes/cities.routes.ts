import { Router } from "express";
import { CreateCityController } from "../modules/cities/useCases/createCity/CreateCityController";
import { FindByNameCityController } from "../modules/cities/useCases/findByNameCity/FindByNameCityController";
import { FindByUfCityController } from "../modules/cities/useCases/findByUfCity/FindByUfCityController";

const citiesRoutes = Router();

const createCityController = new CreateCityController();
const findByNameCityController = new FindByNameCityController();
const findByUfCityController = new FindByUfCityController();

citiesRoutes.post("/", createCityController.handle);
citiesRoutes.get("/name/", findByNameCityController.handle);
citiesRoutes.get("/uf/", findByUfCityController.handle);

export { citiesRoutes };