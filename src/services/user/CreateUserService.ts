import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string,
    email: string,
    password: string
}
class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        //*Verifica se o email foi enviado*/
        if (!email) {
            throw new Error("Email incorrect")
        }

        /*Verificando se o email existe na plataforma*/
        const userAlreadyexists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyexists) {
            throw new Error("User alredy exists")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{
                id: true,
                name:true,
                email: true,
            }
        })

        return user;
    }
}
export { CreateUserService }