import { Router } from "express";

/*Importações criadas*/
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from './controllers/user/DetailUserController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

import { isAuthenticated } from './middlewares/isAuthenticated'
const router = Router();

/**Rotas users**/
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/info', isAuthenticated, new DetailUserController().handle)

/*Rotas categories*/
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoryController().handle )

export { router }