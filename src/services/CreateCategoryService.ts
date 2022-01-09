import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    const categoryExists = await repo.findOne({ name });

    if (categoryExists) {
      return new Error("A category with the same name already exists");
    }

    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category;
  }
}
