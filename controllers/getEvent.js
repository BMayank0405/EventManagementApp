const Event = require("../models/event");
const { finduserById } = require("./findUser");
const { findVenueById } = require("./findVenue");

module.exports = {
  getEvent: async (req, res, next) => {
    try {
      let events = await Event.find({
        $and: [
          {
            activeId: 1
          },
          {
            status: 2
          },
          {
            "date.startDate": {
              $gte: new Date()
            }
          }
        ]
      });
      let returnEvent = [];
      let counter = 0;
      for (let event of events) {
        let society = await finduserById(event.societyId);
        returnEvent.push({});
        returnEvent[counter] = Object.assign({}, event)._doc;

        returnEvent[counter]["society"] = society[0].name.toLowerCase();
        let venue = await findVenueById(event.venueId);
        returnEvent[counter]["venue"] = venue;

        counter++;
      }
      return res.status(200).json({ returnEvent });
    } catch (err) {
      if (err)
       { 
        return res.status(403).send({
                 error: err.errmsg
               });
      }
      else {
        return res.status(500).send({error:"Internal Server Error"})
      }
    }
  }
};
