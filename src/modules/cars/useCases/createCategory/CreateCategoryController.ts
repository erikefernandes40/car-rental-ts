import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Response, Request } from "express";


export class CreateCategoryController {
  constructor(private readonly createCategoryUseCase : CreateCategoryUseCase) {  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body

    this.createCategoryUseCase.execute({ name, description })

    return response.status(201).send()
  }
}