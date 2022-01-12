import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCustomersUseCase } from "./CreateCustomersUseCase";


class CreateCustomersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            fullName,
            gender,
            birth,
            city
        } = request.body;

        const createCustomersUseCase = container.resolve(CreateCustomersUseCase);


        const customer = await createCustomersUseCase.execute({
            fullName,
            gender,
            birth,
            city
        });

        return response.status(201).json(customer);
    }
}

export { CreateCustomersController };