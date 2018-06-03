const User = require("../models/user");

module.exports = {
  getAllSocieties: async (req, res, next) => {
    try {
      let user = await User.find(
        {
          $and: [
            {
              $or: [
                {
                  flag: 0
                },
                {
                  flag: 1
                },
                {
                  flag: 2
                }
              ]
            },
            { active: 1 }
          ]
        },
        "id username"
      );

      return res.status(200).json({ user });
    } catch (err) {
      if (err) return res.status(500).send({ error: err.errmsg });
    }
  }
};
