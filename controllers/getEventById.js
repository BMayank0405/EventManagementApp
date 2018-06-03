const Event = require("../models/event");
const { findVenueById } = require("./findVenue");

module.exports = {
  getEventById: async (req, res, next) => {
    let { id } = req.body;
    let returnEvent = [];
    try {
      let event = await Event.findById({ _id: id });
      returnEvent.push({});
      returnEvent[0] = Object.assign({}, event)._doc;
      let venue = await findVenueById(event.venueId);
      returnEvent[0]["venue"] = venue;
      res.status(200).json({returnEvent})
    } catch (err) {
      if (err)
     {
     console.log(err) 
      return res.status(403).send({
             error: err.errmsg
           });}
    }
  }
};
