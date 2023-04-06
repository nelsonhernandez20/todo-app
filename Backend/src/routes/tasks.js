import { Router } from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks';
const router = Router();

/**
 * @swagger
 * tags:
 * name: Tasks
 * description: Tasks endpoint
 * 
 */

/**
 * @swagger
 * /tasks:
 * get:
 *   summary: get all tasks
 *   tags: [Tasks]
 */

router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 * get:
 *   summary: get total tasks counter
 *
 */

router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks/:
 * get:
 *   summary: get a task by id
 *
 */

router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks/:
 * post:
 *   summary: save a new task
 *
 */

router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 * delete:
 *   summary: delete a task by id
 *
 */

router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks:
 * put:
 *   summary: update a task by id
 *
 */

router.put('/tasks/:id', updateTask);

export default router;
