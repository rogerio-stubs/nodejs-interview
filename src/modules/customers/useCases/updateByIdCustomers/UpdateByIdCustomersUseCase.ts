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
            throw new AppError("É necessário informar um ID como parâmetro!");
        }
        
        if(!fullName) {
            throw new AppError("É necessário informar um novo nome para alteração!");
        }

        if(!validate(id)) {
            throw new AppError("O ID informado é inválido");
        }

        const customerAlreadyExists = await this.customersRepository.findById(id);
        if(!customerAlreadyExists) {
            throw new AppError("O ID informado não foi encontrado!")
        }

        const customers = await this.customersRepository.updateById({fullName, id});


        return customers;
    }
}

export { UpdateByIdCustomersUseCase };