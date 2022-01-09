import { getRepository } from "typeorm";

import { Category } from "../entities/Category";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    const foundCategory = await repo.findOne({ id });

    if (!foundCategory) {
      return new Error("Category not found");
    }

    await repo.delete(id);
  }
}
