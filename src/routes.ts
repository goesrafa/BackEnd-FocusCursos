import { Router, Request, Response } from "express";

const router = Router();

router.get('/test', (req: Request, res: Response) => {  
    return res.json({ nome: 'Focus Cursos' })
})
export { router }