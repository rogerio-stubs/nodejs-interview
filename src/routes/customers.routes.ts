import { Router } from "express";
import { CreateCustomersController } from "../modules/customers/useCases/createCustomers/CreateCustomersController";
import { FindByIdCustomersController } from "../modules/customers/useCases/findByIdCustomers/FindByIdCustomersController";
import { FindByNameCustomersController } from "../modules/customers/useCases/findByNameCustomers/FindByNameCustomersController";
import { RemoveByIdCustomersController } from "../modules/customers/useCases/removeByIdCustomers/RemoveByIdCustomersController";
import { UpdateByIdCustomersController } from "../modules/customers/useCases/updateByIdCustomers/UpdateByIdCustomersController";

const customersRoutes = Router();

const createCustomersController = new CreateCustomersController();
const findByNameCustomersController = new FindByNameCustomersController();
const findByIdCustomersController = new FindByIdCustomersController();
const removeByIdCustomersController = new RemoveByIdCustomersController();
const updateByIdCustomersController = new UpdateByIdCustomersController();

customersRoutes.post("/", createCustomersController.handle);
customersRoutes.get("/name/", findByNameCustomersController.handle);
customersRoutes.get("/id/:id?", findByIdCustomersController.handle);
customersRoutes.delete("/id/:id?", removeByIdCustomersController.handle);
customersRoutes.put("/id/:id?", updateByIdCustomersController.handle);

export { customersRoutes };