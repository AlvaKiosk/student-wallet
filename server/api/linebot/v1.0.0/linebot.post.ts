import { PrismaClient } from "@prisma/client";
// import Debug from 'debug'


const prisma = new PrismaClient();
// const debug = Debug('api:branch:add')

export default defineEventHandler( async(event)=>{
    const body = await readBody(event)

    console.log(body.events[0])
    console.log(body.events[0].source)
    console.log(body.events[0].message)
    
    return body
})