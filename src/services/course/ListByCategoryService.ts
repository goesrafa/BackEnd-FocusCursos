import prismaClient from "../../prisma";

interface CouseRequest{
    category_id: string;
}

class ListByCategoryService{
    async execute({category_id}:CouseRequest){
        const findByCategory = prismaClient.course.findMany({
            where:{
                category_id: category_id
            }
        })

        return findByCategory
    }
}

export {ListByCategoryService}