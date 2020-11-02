const Joi = require("joi");
const { schema } = require("../Models/User");

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        number: Joi.number().min(10),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
};

module.exports = { registerValidation, loginValidation }