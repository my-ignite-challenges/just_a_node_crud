import { getRepository } from "typeorm";

import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {
    const repo = getRepository(Category);

    const foundCategory = await repo.findOne(id);

    if (!foundCategory) {
      return new Error("Category not found");
    }

    foundCategory.name = name ? name : foundCategory.name;
    foundCategory.description = description
      ? description
      : foundCategory.description;

    await repo.save(foundCategory);

    return foundCategory;
  }
}
