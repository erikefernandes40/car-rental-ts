import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
  name: string
  description: string 
}
export class CreateCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {

  }
  execute({name, description}: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    if(categoryAlreadyExists){
      throw new Error ("Category Already Exists!")
    }
  
    this.categoriesRepository.create({ name, description })
  }
}