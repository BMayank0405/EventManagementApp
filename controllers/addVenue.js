const Venue = require("../models/venue");

module.exports = {
  addVenue: async (req, res, next) => {
    const { name } = req.value.body;
    const venue = new Venue({ name });
    try {
      await venue.save();
      res.status(200).json({ message: "venue added" });
    } catch (err) {
      if (err) return res.status(403).send({ error: err.errmsg });
    }
  }
};
