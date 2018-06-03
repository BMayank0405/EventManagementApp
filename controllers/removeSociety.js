const User = require("../models/user");
const Event = require("../models/event");

const { removeUserById } = require("./findUser");

module.exports = {
  removeSociety: async (req, res, next) => {
    const { id } = req.body;
    try {
      await User.findByIdAndUpdate(
        { _id: id },
        { $set: { active: 0 } },
        { new: true }
      );
      try {
        await Event.findAndUpdate(
          { societyId: id },
          { $set: { activeId: 0 } },
          { new: true }
        );
        removeUserById(id);
        return res
          .status(200)
          .json({ message: "Society successfully deleted" });
      } catch (err) {
        if (err) {
          try {
            await User.findByIdAndUpdate(
              { _id: id },
              { $set: { active: 1 } },
              { new: true }
            );
          } catch (err) {
            if (err) return res.status(500).send({ error: err.errmsg });
          }
          return res.status(500).send({ error: err.errmsg });
        }
      }
    } catch (err) {
      if (err) return res.status(500).send({ error: err.errmsg });
    }
  }
};
