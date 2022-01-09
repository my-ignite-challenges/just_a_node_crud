import { getRepository } from "typeorm";

import { Video } from "../entities/Video";

type VideoUpdateRequest = {
  id: string;
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class UpdateVideoService {
  async execute({
    id,
    name,
    description,
    duration,
    category_id,
  }: VideoUpdateRequest) {
    const repo = getRepository(Video);

    const foundVideo = await repo.findOne(id);

    if (!foundVideo) {
      return new Error("Video not found");
    }

    foundVideo.name = name ? name : foundVideo.name;
    foundVideo.description = description ? description : foundVideo.description;
    foundVideo.duration = duration ? duration : foundVideo.duration;
    foundVideo.category_id = category_id ? category_id : foundVideo.category_id;

    await repo.save(foundVideo);

    return foundVideo;
  }
}
