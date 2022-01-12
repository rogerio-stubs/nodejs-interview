import { inject, injectable } from "tsyringe";
import dayjs from "dayjs";

import { Customer } from "../../entities/Customer";
import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";
import { AppError } from "../../../../errors/AppError";


@injectable()
class CreateCustomersUseCase {
    constructor(
        @inject("CustomersRepository")
        private customerRepository: ICustomersRepository
    ) {}

    async execute({
        fullName,
        gender,
        birth,
        city,
    }: ICreateCustomerDTO): Promise<Customer> {
        const dateNow = new Date();
        const calculateAge = dayjs(dateNow).diff(birth, "years");

        if(calculateAge <= 0) {
            throw new AppError("Data de nascimento inválida!");
        }
        
        const customer = await this.customerRepository.create({
            fullName: fullName.toLowerCase(),
            gender,
            birth,
            city,
            age: calculateAge,
        });

        return customer;
    }

}

export { CreateCustomersUseCase };