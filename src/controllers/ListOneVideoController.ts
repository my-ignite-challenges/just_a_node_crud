import { Request, Response } from "express";
import { ListOneVideoService } from "../services/ListOneVideoService";

export class ListOneVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new ListOneVideoService();

    const video = await service.execute(id);

    return response.json(video);
  }
}
