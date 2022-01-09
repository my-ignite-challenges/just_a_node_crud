import { getRepository } from "typeorm";

import { Video } from "../entities/Video";

export class ListOneVideoService {
  async execute(id) {
    const repo = getRepository(Video);

    const foundVideo = await repo.findOne(id);

    if (!foundVideo) {
      return new Error("Video not found");
    }

    return foundVideo;
  }
}
