import { join } from '@prisma/client/runtime/library'
import Joi from 'joi'

export async function validateNewUserInfo(body:any){
    const schema = Joi.object({
        name: Joi.string().required(),
        thName: Joi.string().required(),
        tagId: Joi.string().required(),
    })
    return schema.validate(body)
}

export async function validateAddCredit(body:any){
    const schema = Joi.object({
        tagId: Joi.string().required(),
        credit: Joi.number().required()
    })
    return schema.validate(body)
}