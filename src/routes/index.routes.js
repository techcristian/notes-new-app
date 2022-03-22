import { Router } from "express";

import { renderIndex, renderTask, renderTaskEdit, editTask, deleteTask, toggleTask, aboutMenu } from '../controllers/tasks.controller';

const router = Router();
//route index
router.get("/", renderIndex);
//route add task
router.post("/tasks/add", renderTask);
//editing get
router.get("/task/:id/edit", renderTaskEdit);
//editing post
router.post("task/:id/edit", editTask);
//delete get
router.get("/task/:id/delete", deleteTask);
//toggledono (true/false)
router.get("/task/:id/toggledone", toggleTask);
//route about
router.get("/task/about", aboutMenu);

export default router;