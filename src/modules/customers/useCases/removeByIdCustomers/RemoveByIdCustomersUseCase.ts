import { inject, injectable } from "tsyringe";
import { validate } from "uuid";
import { AppError } from "../../../../errors/AppError";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

interface IResponse {

}

@injectable()
class RemoveByIdCustomersUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: string): Promise<void> {
        
        if(!id) {
            throw new AppError("É necessário informar um ID!");
        }

        if(!validate(id)) {
            throw new AppError("Id invalido");
        }

        const customerAlreadyExists = await this.customersRepository.findById(id);
        if(!customerAlreadyExists) {
            throw new AppError("Id não foi encontrado!")
        }

        await this.customersRepository.removeById(id);
    }
}

export { RemoveByIdCustomersUseCase };