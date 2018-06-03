const User = require("../models/user");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      let user = await User.find(
        {
          $and: [
            { active: 1 },
            {
              $or: [{ flag: 1 }, { flag: 2 }]
            }
          ]
        },
        "id username"
      );

      return res.status(200).json({ user });
    } catch (err) {
      if (err) return res.status(500).send({ error: "Internal server error" });
    }
  }
};
