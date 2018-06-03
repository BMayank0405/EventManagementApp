const Joi = require("joi");

module.exports = {
  InputValidation: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(401).send({
          error: result.error.details[0].message
        });
      }

      if (!req.value) {
        req.value = {};
      }
      req.value["body"] = result.value;
      next();
    };
  },

  schemas: {
    registerSchema: Joi.object().keys({
      username: Joi.string()
        .min(2)
        .max(30)
        .required(),
      password: Joi.string()
        .min(7)
        .required(),
      flag: Joi.number()
        .integer()
        .min(0)
        .max(5)
        .required(),
      name: Joi.string()
        .min(5)
        .max(60)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      headId: Joi.object()
        .keys({
          cultural: Joi.string().when("flag", {
            is: Joi.number().valid(0, 2),
            then: Joi.string().required(),
            otherwise: Joi.string().optional()
          }),
          technical: Joi.string().when("flag", {
            is: Joi.number().valid(0, 1),
            then: Joi.string().required(),
            otherwise: Joi.string().optional()
          })
        })
        .when("flag", {
          is: Joi.number()
            .min(0)
            .max(2),
          then: Joi.required(),
          otherwise: Joi.optional()
        }),
      facultyId: Joi.string().when("flag", {
        is: Joi.number()
          .min(0)
          .max(2),
        then: Joi.string().required(),
        otherwise: Joi.string().optional()
      })
    }),
    loginSchema: Joi.object().keys({
      username: Joi.string()
        .min(2)
        .max(30)
        .required(),
      password: Joi.string().required()
    }),
    forgotpasswordSchema: Joi.object().keys({
      username: Joi.string()
        .min(2)
        .max(30)
        .required()
    }),
    changepasswordSchema: Joi.object().keys({
      password: Joi.string()
        .min(2)
        .required()
    }),
    idSchema: Joi.object().keys({
      id: Joi.string().required()
    }),
    venueSchema: Joi.object().keys({
      name: Joi.string()
        .min(2)
        .max(30)
        .required()
    }),
    editSchema: Joi.object().keys({
      edit: Joi.string()
        .min(5)
        .required(),
      id: Joi.string().required()
    })
  }
}; //end of module exports