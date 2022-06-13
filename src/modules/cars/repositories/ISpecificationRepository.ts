import { Specification } from "../model/Specification"


export interface ICreateSpecificationDto {
  name: string
  description: string
}

export interface ISpecificationsRepository {

create({ description, name }: ICreateSpecificationDto): void

findByName(name: string): Specification
}