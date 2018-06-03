const Event = require("../models/event");


module.exports = {
  decline: async (req, res, next) => {
    const { id } = req.value.body;
    const { flag } = req.user;

    let user = "facultyId";
    let stat = 0;
    if (flag == 4) {
      stat = 1;
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

      if (!validFaculty)
        return res.status(403).send({ meassage: "not a valid faculty" });
      if (valid[0].status != stat)
        return res
          .status(403)
          .send({ meassage: "Event has already been approved or declined" });

      try {
        let final_stat = -stat -1;
         await Event.findByIdAndUpdate(
          { _id: id },
          { $set: { status: final_stat } }
        );

        return res.status(200).send({ message:"event has been declined" });
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
