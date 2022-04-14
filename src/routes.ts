import { Router } from "express";
import multer from "multer";

/*Importações criadas*/
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from './controllers/user/DetailUserController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import {CreateCourseController } from './controllers/course/CreateCourseController'

import uploadConfig  from './config/multer'

import { isAuthenticated } from './middlewares/isAuthenticated'
const router = Router();

const upload = multer (uploadConfig.upload("./temp"))

/**Rotas users**/
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/info', isAuthenticated, new DetailUserController().handle)

/*Rotas categories*/
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoryController().handle )

/*Rotas cursos*/
router.post('/courses', isAuthenticated, upload.single('file'), new CreateCourseController().handle)

export { router }