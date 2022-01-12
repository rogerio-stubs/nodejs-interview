import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCityUseCase } from "./CreateCityUseCase";

class CreateCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, uf } = request.body;
        const createCityUseCase = container.resolve(CreateCityUseCase);

        
        await createCityUseCase.execute({ name, uf });

        return response.status(201).send();
    }
}

export { CreateCityController };