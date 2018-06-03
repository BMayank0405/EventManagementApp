const Venue = require("../models/venue");

let venue = {};
let ven = "";

module.exports = {
  findVenueById: async id => {
    ven = venue[id];
    if (ven) return ven;
    else {
      try {
        ven = await Venue.findById({ _id: id }, "name");
        venue[id] = ven.name;
        return venue[id];
      } catch (err) {
        return res.status(500).send({
          error: "Internal Server Error"
        });
      }
    }
  }
  // UpdateVenueById : async(id,name)=>{
  //   soc = user[id];
  //   if(soc) {
  //     user[id] = name;
  //     return
  //   }
  //   else return
  // }
};
