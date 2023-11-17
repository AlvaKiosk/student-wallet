import Joi from 'joi'

export async function validateNewAsset(body:any){
    const schema = Joi.object({
        assetName: Joi.string().required(),
    })
    return schema.validate(body)
}
