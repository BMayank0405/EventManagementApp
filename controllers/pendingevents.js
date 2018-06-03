const User = require("../models/user");
const Event = require("../models/event");
const { finduserById } = require("./findUser");
const { findVenueById } = require("./findVenue");

module.exports = {
  pendingevents: async (req, res, next) => {
    const { id, flag } = req.user;

    //stat is used for checking which events were approved by previous faculty
    let stat = 0;
    let user = "facultyId";
    if (flag == 4) {
      stat = 1;
      user = "headId";
    }
    try {
      let pendingEvents = await Event.find({
        $and: [
          {
            "date.startDate": {
              $gte: new Date()
            }
          },
          {
            [user]: id
          },
          {
            status: stat
          },
          {
            activeId: 1
          }
        ]
      });

      let returnEvent = [];
      let counter = 0;
      for (let event of pendingEvents) {
        let society = await finduserById(event.societyId);
        returnEvent.push({});
        returnEvent[counter] = Object.assign({}, event)._doc;

        returnEvent[counter]["society"] = society[0].name;
        let venue = await findVenueById(event.venueId);
        returnEvent[counter]["venue"] = venue;

        counter++;
      }

      return res.status(200).json({ returnEvent });
    } catch (err) {
      if (err) return res.status(403).send({ error: err.errmsg });
    }
  }
};
