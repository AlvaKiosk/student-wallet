import { PrismaClient } from "@prisma/client";
import Debug from 'debug'


const prisma = new PrismaClient();
const debug = Debug('api:branch:add')

export default defineEventHandler( async(event)=>{
    console.log(event)
    
    return "Hello linebot"
})