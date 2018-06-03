const Event = require("../models/event");

module.exports = {
  historyDecline: async (req, res, next) => {
    const { id } = req.value.body;

    let user = "facultyId";
    let final_stat = -1;
    let stat = 1;
    if (flag == 4) {
      stat = 2;
      final_stat = -2;
      user = "headId";
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
      if (valid[0].status != stat)
        return res.status(403).send({
          error: "Event either has been rejected or is still pending"
        });

      try {
        await Event.findByIdAndUpdate(
          { _id: id },
          { $set: { status: final_stat } }
        );


        return res.status(200).json({ message:"event has been declined" });
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
