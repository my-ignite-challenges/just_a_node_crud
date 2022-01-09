import { getRepository } from "typeorm";

import { Video } from "../entities/Video";

export class DeleteVideoService {
  async execute(id: string) {
    const repo = getRepository(Video);

    const foundVideo = repo.findOne({ id });

    if (!foundVideo) {
      return new Error("Video not found");
    }

    await repo.delete(id);
  }
}
