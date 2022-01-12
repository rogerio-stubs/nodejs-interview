import { getRepository, Repository } from "typeorm";
import { ICreateCityDTO } from "../../dtos/ICreateCityDTO";
import { City } from "../../entities/City";
import { ICitiesRepository } from "../ICitiesRepository";

class CitiesRepository implements ICitiesRepository {
    private repository: Repository<City>;

    constructor() {
        this.repository = getRepository(City);
    }

    async create({ name, uf }: ICreateCityDTO): Promise<void> {
        const city = this.repository.create({
            name,
            uf
        });

        await this.repository.save(city);
    }

    async findByName(name: string): Promise<City[]> {
        const city = await this.repository.find({ name });
        return city;
    }

    async findByUf(uf: string): Promise<City[]> {
        const city = await this.repository.find({ uf });
        return city;   
    }

    async findByNameAndUf({ name, uf }: ICreateCityDTO): Promise<City> {
        const city = await this.repository.findOne({ where: [ {name: name, uf: uf} ] });
        return city;
    }
}

export { CitiesRepository };