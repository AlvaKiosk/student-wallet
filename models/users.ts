import Joi from 'joi'


export async function validateNewUser(body:any){
    const schema = Joi.object({

    })
    return schema.validate(body);
}
// export async function validateAcceptBillCoin(body:any){
//     const schema = Joi.object({
//         branchCode: Joi.string().required(),
//         assetCode: Joi.string().required(),
//         walletCode: Joi.string().required().allow(null,''),
//         amount:Joi.string().required()
//     }).unknown(true)
//     return schema.validate(body)
// }