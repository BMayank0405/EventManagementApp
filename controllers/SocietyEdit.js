const Event = require("../models/event");

module.exports = {
  SocietyEdit: async (req, res, next) => {
    const { id } = req.body;
    try {
      await Event.findByIdAndUpdate(
        { _id: id },
        { $set: req.body }
      );
      await Event.findByIdAndUpdate(
        { _id: id },
        { $set:{ status: 0 } }
      );

      return res.status(200).json({ message: "Event successfully editted" });
    } catch (err) {
      if (err) return res.status(403).send({ error: err.errmsg });
    }
  }
};
