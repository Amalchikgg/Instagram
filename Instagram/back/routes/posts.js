import { Router } from "express";
import { Comment, PostController, UserController } from "../Controller/index.js";
const router = new Router()

router.get('/comments/:id', PostController.getPostComments);

export default router;