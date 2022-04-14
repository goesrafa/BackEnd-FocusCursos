import { Request, Response } from "express";
import {CreateCourseService } from '../../services/course/CreateCourseService'

class CreateCourseController{
    async handle(req: Request, res:Response) {
        const {nameCourse, description, banner, nameTeacher, category_id} = req.body

        const createCourseService = new CreateCourseService()

        const course = await createCourseService.execute({
            nameCourse,
            description,
            banner,
            nameTeacher,
            category_id
        })

        return res.json(course)

    }
}
export { CreateCourseController}