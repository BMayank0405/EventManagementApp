const User = require("../models/user");
module.exports = {
  validateUsername: async (req, res, next) => {
    const schema = Joi.object().keys({
      username: Joi.string()
        .min(2)
        .max(30)
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
      username
    } = req.value.body;
    try {
      let user = await User.findOne({
        username
      });
      if (user)
        return res.status(403).send({
          error: "Username is already in use"
        });
      else return res.status(200).send({
        message: "valid username"
      })
    } catch (err) {
      if (err)
        return res.status(403).send({
          error: err.errmsg
        });
    }
  }
}