const User = require("../models/user");
module.exports = {
  validateEmail: async (req, res, next) => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required()
    });
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(401).send({
        error: result.error.details[0].message
      });
    }
    req.value["body"] = result.value;
    const {
      email
    } = req.value.body;
    try {
      let user = await User.findOne({
        email
      });
      if (user)
        return res.status(403).send({
          error: "email is already in use"
        });
      else return res.status(200).send({
        message: "valid email"
      })
    } catch (err) {
      if (err)
        return res.status(403).send({
          error: err.errmsg
        });
    }
  }
}