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
        const course = await prismaClient.course.create({
            data:{
                nameCourse: nameCourse,
                description:description,
                banner:banner,
                nameTeacher:nameTeacher,
                category_id:category_id
            },
            select:{
                nameCourse:true,
                description:true,
                nameTeacher:true
            }
        })
        return course
    }
}

export { CreateCourseService}