const Event = require("../models/event");

module.exports = {
  suggestEdit: async (req, res, next) => {
    const { flag } = req.user;
    const { id, edit } = req.value.body;

    let user = "facultyId";
    let final_stat = 3;
    if (flag == 4) {
      user = "headId";
      final_stat = -3;
    }

    try {
      let valid = await Event.find(
        {
          $and: [
            { _id: id },
            { activeId: 1 },
            {
              [user]: req.user.id
            }
          ]
        },
        "status"
      );

      let validFaculty = valid ? true : false;

      if (valid.status == final_stat || valid.status == -final_stat || !validFaculty)
        return res.status(403).send({
          error: "This event cannot be editted"
        });

        await Event.findByIdAndUpdate(
        { _id: id },
        { $set: { status: final_stat, edit: edit } }
      );

      return res
        .status(200)
        .json({ message: "Edit suggestion successfully placed" });
    } catch (err) {
      if (err) return res.status(403).send({ error: err.errmsg });
    }
  }
};
