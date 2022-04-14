import { Request, Response } from "express";
import { ListByCategoryService} from '../../services/course/ListByCategoryService'

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const  category_id = req.query.category_id as string;

        const listByCategory = new ListByCategoryService();

        const courses = await listByCategory.execute({
            category_id
        })
        return res.json(courses)
    }
}

export { ListByCategoryController}