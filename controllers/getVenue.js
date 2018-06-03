const Venue = require("../models/venue");

module.exports = {
  getVenue: async (req, res, next) => {
    try {
      const venues = await Venue.find({ activeId: 1 }, "id name");
      return res.status(200).json({ venues });
    } catch (err) {
      if (err) return res.status(403).send({ error: err.errmsg });
    }
  }
};
