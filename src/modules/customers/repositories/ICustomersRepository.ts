
import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";
import { IUpdateCustomerDTO } from "../dtos/IUpdateCustomerDTO";
import { Customer } from "../entities/Customer";

interface ICustomersRepository {
    create({
        fullName,
        gender,
        birth,
        age,
        city
    }: ICreateCustomerDTO): Promise<Customer>;
    findByName(fullName: string): Promise<Customer[]>;
    findById(id: string): Promise<Customer>;
    removeById(id: string): Promise<void>;
    updateById({fullName, id}: IUpdateCustomerDTO): Promise<Customer>;
}

export { ICustomersRepository };