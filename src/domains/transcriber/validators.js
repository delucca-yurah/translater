import Joi from 'joi';

const translate = Joi.object().keys({
  content: Joi.string().required(),
  language: Joi.string().required()
}).required()

export default {
  translate
}
