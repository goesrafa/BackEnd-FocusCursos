import prismaClient from "../../prisma";

interface CoursesRequest{
    nameCourse: string,
    description: string,
    banner: string,
    nameTeacher: string,
    category_id: string
}

class CreateCourseService{
    async execute({nameCourse, description, banner, nameTeacher, category_id} : CoursesRequest){
        
        return {ok:true}
    }
}

export { CreateCourseService}