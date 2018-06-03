const User = require("../models/user");
const Event = require("../models/event");
const { finduserById } = require("./findUser");
const { findVenueById } = require("./findVenue");

module.exports = {
  history: async (req, res, next) => {
    const { id ,flag} = req.user;

    //stat is used for checking which events were approved by previous faculty
    let stat = 1;
    let user = "facultyId";
    if (flag == 4) {
      stat = 2;
      user = "headId";
    }
    try {
      let eventHistory = await Event.find({
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
            $or: [{ status: stat }, { status: -stat }]
          }
        ]
      });
      
      let acceptedEvent = [];
      let rejectedEvent = [];
      let accepted = rejected =0;
      for (let event of eventHistory) {
        let society = await finduserById(event.societyId);
        let venue = await findVenueById(event.venueId);
        if(event.status == stat){
        acceptedEvent.push({});
        acceptedEvent[accepted] = Object.assign({}, event)._doc;
        acceptedEvent[accepted]["society"] = society[0].name;
        
        acceptedEvent[accepted]["venue"] = venue;

        accepted++;
        }

      
      else if(event.status == -stat){
        rejectedEvent.push({});
        rejectedEvent[rejected] = Object.assign({}, event)._doc;

        rejectedEvent[rejected]["society"] = society[0].name;
        
        rejectedEvent[rejected]["venue"] = venue;

        rejected++;
      }
}
      let returnEvent = [{
        accepted:acceptedEvent
      },{
        rejected:rejectedEvent
      }];
      return res.status(200).json({ returnEvent });
    } catch (err) {
      if (err)
        return res.status(403).send({
          error: err.errmsg
        });
    }
  }
};
