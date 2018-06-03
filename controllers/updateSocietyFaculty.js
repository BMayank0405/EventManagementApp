const User = require("../models/user");

const { UpdateUserById } = require("./findUser");

module.exports = {
  updateSocietyFaculty: async (req, res, next) => {
    const { id } = req.value.body;

    try {
      let user = await User.findByIdAndUpdate(
        { id },
        { $set: req.value.body },
        { new: true }
      );
      let society = await UpdateUserById(id, user.name);
      return res.status(200).json({ message: "OK" });
    } catch (err) {
      if (err) return res.status(500).send({ error: err.errmsg });
    }
  }
};
