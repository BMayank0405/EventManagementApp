const User = require("../models/user");

let user = {};
let soc = "";

module.exports = {
  finduserById: async id => {
    soc = user[id];
    if (soc) {
      return soc;
    }
    else {
      try {
        soc = await User.find(
          {
            $and: [{ _id: id }, { active: 1 }]
          },
          "id username name email headId flag"
        );
        user[id] = soc;
        return user[id];
      } catch (err) {
        return res.status(500).send({
          error: "Internal Server Error"
        });
      }
    }
  },
  removeUserById: async id => {
    if (user[id]) {
      delete user[id];
      return;
    } else return;
  },
  UpdateUserById: async (id, name) => {
    user[id] = name;
    return;
  }
};
