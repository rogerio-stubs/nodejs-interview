import { inject, injectable } from "tsyringe";
import { validate } from "uuid";
import { AppError } from "../../../../errors/AppError";
import { Customer } from "../../entities/Customer";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";


@injectable()
class FindByIdCustomersUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: string): Promise<Customer> {
        
        if(!id) {
            throw new AppError("É necessário informar um ID como parâmetro!");
        }

        
        if(!validate(id)) {
            throw new AppError("O ID informado é inválido!");
        }

        const customers = await this.customersRepository.findById(id);
        

        return customers;
    }
}

export { FindByIdCustomersUseCase };