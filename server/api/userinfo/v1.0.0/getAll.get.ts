import { PrismaClient } from "@prisma/client";
// import Debug from 'debug'


const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    const userInfo = await prisma.userInfo.findMany()
    return userInfo
})