import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByNameCustomersUseCase } from "./FindByNameCustomersUseCase";


class FindByNameCustomersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const findByNameCustomersUserCase = container.resolve(FindByNameCustomersUseCase);

        const customers = await findByNameCustomersUserCase.execute(name);

        return response.json(customers);
    }
}

export { FindByNameCustomersController };