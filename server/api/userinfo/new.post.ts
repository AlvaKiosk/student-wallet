import { PrismaClient } from "@prisma/client";
// import Debug from 'debug'
import { validateNewUserInfo} from "~/models/userinfo";

const prisma = new PrismaClient();
// const debug = Debug('api:userinfo:addCredit')

export default defineEventHandler(async(event)=>{
    const body = await readBody(event)

    const {error} = await validateNewUserInfo(body)
    if(error) {
        throw createError({
            statusCode:400,
            statusMessage: error.details[0].message,
            stack:''
        })   
    }

    const userinfo = await prisma.userInfo.create({
        data:{
            name: body.name,
            thName: body.thName,
            tagId: body.tagId,
        }
    })

    return userinfo

})