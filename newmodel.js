const Joi=require('joi')

const schema=Joi.object({
    name:Joi.string().required(),
    ingrediensts:Joi.array().required(),
    state:Joi.string().required(),
    image:Joi.string().uri().required()
})

const validate=(data)=>(payload)=>
    data.validate(payload,{abortEarly:false})

exports.validatedata = validate(schema)