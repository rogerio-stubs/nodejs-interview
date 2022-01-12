import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdCustomersUseCase } from "./FindByIdCustomersUseCase";

class FindByIdCustomersController {
   async handle(request: Request, response: Response): Promise<Response> {
       const { id } = request.params;
         
       const findByIdCustomersUseCase = container.resolve(FindByIdCustomersUseCase);
       
       const customers = await findByIdCustomersUseCase.execute(id);

       return response.json(customers);
    
   } 
}

export { FindByIdCustomersController };