import { inject, injectable } from "tsyringe";
import { validate } from "uuid";
import { AppError } from "../../../../errors/AppError";
import { IUpdateCustomerDTO } from "../../dtos/IUpdateCustomerDTO";
import { Customer } from "../../entities/Customer";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

@injectable()
class UpdateByIdCustomersUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute({fullName, id}: IUpdateCustomerDTO): Promise<Customer> {
        
        if(!id) {
            throw new AppError("ID nao pode ser vazio");
        }
        
        if(!fullName) {
            throw new AppError("É necessário informar um nome");
        }

        if(!validate(id)) {
            throw new AppError("Id nao é valido");
        }

        const customerAlreadyExists = await this.customersRepository.findById(id);
        if(!customerAlreadyExists) {
            throw new AppError("Id não foi encontrado!")
        }

        const customers = await this.customersRepository.updateById({fullName, id});


        return customers;
    }
}

export { UpdateByIdCustomersUseCase };