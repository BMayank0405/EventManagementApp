const User = require("../models/user");

module.exports = {
  changePassword: async (req, res, next) => {
    const { id } = req.user;
    const { password } = req.value.body;

    try {
      let user = await User.findById({ _id: id });

      if (!user) return res.status(403).send({ error: "not a valid user" });

      user.password = password;

      try {
        await user.save();

        return res.status(200).json({ message: "pwd changed successfully" });
      } catch (err) {
        if (err)
          return res.status(403).send({
            error: err.errmsg
          });
      }
    } catch (err) {
      if (err)
        return res.status(403).send({
          error: err.errmsg
        });
    }
  }
};
