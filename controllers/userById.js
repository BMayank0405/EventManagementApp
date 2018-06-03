const User = require("../models/user");
const Event = require("../models/event");

const { finduserById } = require("./findUser");

module.exports = {
  userById: async (req, res, next) => {
    const { id } = req.params.body;
    const society = [0, 1, 2];
    const faculty = [3, 4];

    try {
      let user = await finduserById(id);

      if (society.includes(user[0].flag)) {
        try {
          let allhead = await User.find({ flag: 2 }, "id name");
          let details = [];
          details.push(user, allhead);
          console.log(details);
          return res.json({ details });
        } catch (err) {
          if (err) return res.status(500).send({ error: err.errmsg });
        }
      } else if (faculty.includes(user.flag)) {
        let details = [];
        details.push(user);
        return res.status(200).json({ details });
      }
    } catch (err) {
      if (err) return res.status(500).send({ error: err.errmsg });
    }
  }
};
