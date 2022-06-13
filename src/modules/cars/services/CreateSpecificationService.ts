import { ISpecificationsRepository } from "../repositories/ISpecificationRepository";

export interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationService {
  constructor(private readonly specificationsRepository: ISpecificationsRepository){}
  execute({ name, description}: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)
    if(specificationAlreadyExists){
      throw new Error("Specification Already Exists!")
    }
    this.specificationsRepository.create({
      name,
      description
    })
  }
}