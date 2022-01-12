import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateCityDTO } from "../../dtos/ICreateCityDTO";
import { ICitiesRepository } from "../../repositories/ICitiesRepository";

@injectable()
class CreateCityUseCase {
    constructor(
        @inject("CitiesRepository")
        private citiesRepository: ICitiesRepository
    ) {}

    async execute({ name, uf }: ICreateCityDTO): Promise<void> {
        const cityAlreadyExists = await this.citiesRepository.findByNameAndUf({
            name: name.toLowerCase(),
            uf: uf.toLowerCase()
        });
        
        if(cityAlreadyExists) {
            throw new AppError("Essa cidade já foi cadastrada");
        }

        await this.citiesRepository.create({
            name: name.toLowerCase(),
            uf: uf.toLowerCase()
        });
    }
}

export { CreateCityUseCase };