import { getRepository, Repository } from "typeorm";
import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { IUpdateCustomerDTO } from "../../dtos/IUpdateCustomerDTO";
import { Customer } from "../../entities/Customer";
import { ICustomersRepository } from "../ICustomersRepository";

class CustomerRepository implements ICustomersRepository {
    private repository: Repository<Customer>;

    constructor() {
        this.repository = getRepository(Customer);
    }

    async create({ fullName, gender, birth, age, city }: ICreateCustomerDTO): Promise<Customer> {        
        const customer = this.repository.create({
            fullName,
            gender,
            birth,
            age,
            city
        });


        await this.repository.save(customer)

        return customer;
    }

    async findByName(fullName: string): Promise<Customer[]> {
        const customer = await this.repository.find({ fullName });

        return customer;
    }

    async findById(id: string): Promise<Customer> {
        const customer = await this.repository.findOne(id);

        return customer
    }

    async removeById(id: string): Promise<void> {
        const customer = await this.repository.findOne(id);

        await this.repository.remove(customer);
    }

    async updateById({ fullName, id }: IUpdateCustomerDTO): Promise<Customer> {
        const customer = await this.repository.findOne(id);

        customer.fullName = fullName;

        await this.repository.update(id, customer);

        return customer;
    }
}

export { CustomerRepository };