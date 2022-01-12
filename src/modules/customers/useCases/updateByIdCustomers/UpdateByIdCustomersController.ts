import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateByIdCustomersUseCase } from "./UpdateByIdCustomersUseCase";

class UpdateByIdCustomersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { fullName } = request.body;
        const { id } = request.params;
        
        
        const updateByIdCustomersUseCase = container.resolve(UpdateByIdCustomersUseCase);

        const customer = await updateByIdCustomersUseCase.execute(fullName, id);

        return response.json(customer);
    }
}


export { UpdateByIdCustomersController };