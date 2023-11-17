import { PrismaClient } from "@prisma/client";
import Debug from 'debug'

import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890ABCDEF', 10)

const prisma = new PrismaClient();
const debug = Debug('api:asset:new')

export default defineEventHandler(async(event)=>{
    
})