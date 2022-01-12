import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { City } from "../../entities/City";
import { ICitiesRepository } from "../../repositories/ICitiesRepository";

interface IRequest {
    name: string;
}

@injectable()
class FindByNameCityUseCase {
    constructor(
        @inject("CitiesRepository")
        private citiesRepository: ICitiesRepository
    ) {} 

    async execute({ name }: IRequest): Promise<City[]> {
        
        if(!name) {
            throw new AppError("Necessário informar o nome!")
        }

        const cities = await this.citiesRepository.findByName(name.toLowerCase());

        return cities;
    }


}

export { FindByNameCityUseCase };