import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { City } from "../../entities/City";
import { ICitiesRepository } from "../../repositories/ICitiesRepository";

interface IRequest {
    uf: string;
}

@injectable()
class FindByUfCityUseCase {
    constructor(
        @inject("CitiesRepository")
        private citiesRepository: ICitiesRepository
    ) {}

    async execute({ uf }: IRequest): Promise<City[]> {

        if(!uf) {
            throw new AppError("Necessário informar a UF");
        }
        
        const cities = await this.citiesRepository.findByUf(uf.toLowerCase());

        return cities;
    }
}

export { FindByUfCityUseCase };