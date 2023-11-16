import { PrismaClient } from "@prisma/client";
// import Debug from 'debug'


const prisma = new PrismaClient();
// const debug = Debug('api:branch:add')

export default defineEventHandler( async(event)=>{
    const body = await readBody(event)

    console.log(body)
    
    return "Hello linebot"
})