import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Customer } from "../../entities/Customer";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

@injectable()
class FindByNameCustomersUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(name: string): Promise<Customer[]> {

        if(!name) {
            throw new AppError("É necessário informar um nome para busca");
        }

        const customers = await this.customersRepository.findByName(name.toLowerCase());
        return customers;
    }
}

export { FindByNameCustomersUseCase };