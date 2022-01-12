import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveByIdCustomersUseCase } from "./RemoveByIdCustomersUseCase";

class RemoveByIdCustomersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const removeByIdCustomersUseCase = container.resolve(RemoveByIdCustomersUseCase);

        await removeByIdCustomersUseCase.execute(id);

        return response.send();

    }
}


export { RemoveByIdCustomersController };