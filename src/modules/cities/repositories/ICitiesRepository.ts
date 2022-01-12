import { ICreateCityDTO } from "../dtos/ICreateCityDTO";
import { City } from "../entities/City";


interface ICitiesRepository {
    create({name, uf}: ICreateCityDTO): Promise<void>;
    findByName(name: string): Promise<City[]>;
    findbyUf(uf: string): Promise<City[]>;
    findByNameAndUf({name, uf}: ICreateCityDTO): Promise<City>;
}

export { ICitiesRepository };
