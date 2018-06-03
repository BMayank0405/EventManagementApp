const Event = require("../models/event");
const { finduserById } = require("./findUser");
const { findVenueById } = require("./findVenue");

module.exports = {
  eventStatus: async (req, res, next) => {
    const { id } = req.user;

    try {
      let events = await Event.find({
        $and: [
          { societyId: id },
          {
            "date.startDate": {
              $gte: new Date()
            }
          }
        ]
      });

 
      let acceptedEvent = [];
      let rejectedEvent = [];
      let pendingEvent = [];
      let editEvent = [];
      let accepted = rejected = pending = edit = 0;
      for (let event of events) {
        let venue = await findVenueById(event.venueId);

        if(event.status == 0 || event.status == 1 ){
          pendingEvent.push({});
          pendingEvent[pending] = Object.assign({}, event)._doc;          
          pendingEvent[pending]["venue"] = venue;

          pending++;
        }
        else if( event.status == 2 ) {
          acceptedEvent.push({});
          acceptedEvent[accepted] = Object.assign({}, event)._doc;          
          acceptedEvent[accepted]["venue"] = venue;

          accepted++;
        }
        else if( event.status == -1 || event.status == -2 )  {
        
        rejectedEvent.push({});
        rejectedEvent[rejected] = Object.assign({}, event)._doc;        
        rejectedEvent[rejected]["venue"] = venue;

        rejected++;
      }
        else if( event.status == 3 || event.status == -3  || event.status == 4)  {
        
        editEvent.push({});
        editEvent[edit] = Object.assign({}, event)._doc;
        editEvent[edit]["venue"] = venue;

        edit++;
      }
    }
      let returnEvent = [{
        pending:pendingEvent
      },{
        rejected:rejectedEvent
      },{
        accepted:acceptedEvent
      },{
        edit:editEvent
      }];

      return res.status(200).json({ returnEvent });
    } catch (err) {
      if (err) {
        console.log(err)
        return res.status(500).send({ error: err.errmsg});}
    }
  }
};
