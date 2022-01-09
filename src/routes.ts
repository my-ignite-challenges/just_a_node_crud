import { Router } from "express";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { DeleteVideoController } from "./controllers/DeleteVideoController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { UpdateVideoController } from "./controllers/UpdateVideoController";
import { ListOneCategoryController } from "./controllers/ListOneCategoryController";
import { ListOneVideoController } from "./controllers/ListOneVideoController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.get("/categories/:id", new ListOneCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.get("/videos/:id", new ListOneVideoController().handle);
routes.put("/videos/:id", new UpdateVideoController().handle);
routes.delete("/videos/:id", new DeleteVideoController().handle);

export { routes };
