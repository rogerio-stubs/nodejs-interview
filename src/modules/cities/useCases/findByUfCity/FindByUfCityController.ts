import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByUfCityUseCase } from "./FindByUfCityUseCase";

class FindByUfCityController {
    async handle(request: Request, response: Response) {
        const { uf } = request.body;

        const findByUfCityUseCase = container.resolve(FindByUfCityUseCase);

        const cities = await findByUfCityUseCase.execute({ uf });

        return response.json(cities);
    }
}

export { FindByUfCityController };