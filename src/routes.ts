import { Router } from "express";

/*Importações criadas*/
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

/**Rotas users**/
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)

export { router }