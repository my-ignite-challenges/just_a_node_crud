import { Request, Response } from "express";
import { ListOneCategoryService } from "../services/ListOneCategoryService ";

export class ListOneCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new ListOneCategoryService();

    const category = await service.execute(id);

    return response.json(category);
  }
}
