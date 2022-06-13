import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


export class ListCategoriesController {
  constructor(private readonly listCategoriesUseCase : ListCategoriesUseCase) {  }

  handle(request: Request, response: Response){
    const all = this.listCategoriesUseCase.execute()
    return response.json(all)
    }
}