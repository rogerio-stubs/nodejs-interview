import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByNameCityUseCase } from "./FindByNameCityUseCase";

class FindByNameCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const findByNameUseCase = container.resolve(FindByNameCityUseCase);

        const cities = await findByNameUseCase.execute({ name });

        return response.json(cities);
    }
}

export { FindByNameCityController };