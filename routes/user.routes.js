import { Router } from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const route = Router();

route.get('/', getUsers);
route.get('/:id',authorize, getUser);
route.put('/:id', authorize, updateUser);
route.delete('/:id', authorize, deleteUser);

export default route;