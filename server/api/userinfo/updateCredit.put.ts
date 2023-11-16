import { PrismaClient } from "@prisma/client";
// import Debug from 'debug'
import { validateAddCredit} from "~/models/userinfo";

const prisma = new PrismaClient();
// const debug = Debug('api:userinfo:addCredit')

export default defineEventHandler(async(event)=>{
    const body = await readBody(event)

    const {error} = await validateAddCredit(body)
    if(error) {
        throw createError({
            statusCode:400,
            statusMessage: error.details[0].message,
            stack:''
        })   
    }

    const userInfo = await prisma.userInfo.update({
        where:{tagId: body.tagId},
        data:{credit: body.credits}
    })
})