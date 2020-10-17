import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';

import { authMiddleware } from './middleware/auth'

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.get('/', function (req, res) {
    res.status(201).send("API Test");
});

routes.post('/api/signup', usersController.signUp);
routes.post('/api/login', usersController.signIn);

routes.get('/api/connections', connectionsController.index);
routes.post('/api/connections', connectionsController.create);

routes.get('/api/classes', classesControllers.index);
routes.post('/api/classes', classesControllers.create);

routes.get('/api/users', usersController.index);

export default routes;