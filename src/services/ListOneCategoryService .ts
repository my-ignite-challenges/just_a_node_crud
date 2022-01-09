import { getRepository } from "typeorm";

import { Category } from "../entities/Category";

export class ListOneCategoryService {
  async execute(id) {
    const repo = getRepository(Category);

    const foundCategory = await repo.findOne(id);

    if (!foundCategory) {
      return new Error("Category not found");
    }

    return foundCategory;
  }
}
