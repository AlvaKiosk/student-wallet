import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    const query = getQuery(event)

    const tagId = query.tagId
    if (!tagId){
        throw createError({
            statusCode:400,
            statusMessage:"tagId missing.",
            stack:''
        })
    }

    const userInfo = await prisma.userInfo.findUniqueOrThrow({
        where:{tagId: tagId as string}
    })

    // if(!userInfo){
    //     throw createError({
    //         statusCode:400,
    //         statusMessage:"tagId not found.",
    //         stack:''
    //     })
    // }

    return userInfo
})