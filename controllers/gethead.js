const User = require("../models/user");

module.exports = {
  getHead: async (req, res, next) => {
    try {
      const head = await User.find(
        {
          $and: [{ $or:[{flag:3},{flag:4}]  }, 
          { active: 1 }]
        },
        "id username flag"
      );
      return res.status(200).json({ head });
    } catch (err) {
      if (err)
        return res.status(500).send({
          error: err.errmsg
        });
    }
  }
};
