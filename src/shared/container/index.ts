import { container } from "tsyringe";
import { ICitiesRepository } from "../../modules/cities/repositories/ICitiesRepository";
import { CitiesRepository } from "../../modules/cities/repositories/implementations/CitiesRepository";
import { ICustomersRepository } from "../../modules/customers/repositories/ICustomersRepository";
import { CustomerRepository } from "../../modules/customers/repositories/implementations/CustomersRepository";

container.registerSingleton<ICitiesRepository>(
    "CitiesRepository",
    CitiesRepository
);

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository",
    CustomerRepository
);