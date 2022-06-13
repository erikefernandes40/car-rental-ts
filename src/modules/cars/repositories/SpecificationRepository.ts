import { Specification } from "../model/Specification";
import { ICreateSpecificationDto, ISpecificationsRepository } from "./ISpecificationRepository";


export class SpecificationRepository implements ISpecificationsRepository{
  constructor(private readonly specifications: Specification[]){
    this.specifications = []
  }
  create({ description, name }: ICreateSpecificationDto): void {
    const specification = new Specification()
    
    Object.assign(specification,{
      name,
      description,
      created_at: new Date()
    })
    
    this.specifications.push(specification)
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name)

    return specification
  }
  
}