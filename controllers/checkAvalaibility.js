const Joi = require("joi");
const Event = require("../models/event");
const Venue = require("../models/venue");

module.exports = {
  checkAvalaibility: async (req, res, next) => {
    let { venueId, date, time } = req.body;
    let Start_Date_Time = `${date.startDate}T${time.startTime}Z`;
    let End_Date_Time = `${date.endDate}T${time.endTime}Z`;
    const schema = Joi.object().keys({
      venueId: Joi.required(),
      Start_Date_Time: Joi.date()
        .min("now")
        .required(),
      End_Date_Time: Joi.date()
        .min(Joi.ref("Start_Date_Time"))
        .required()
    });
    const result = Joi.validate(
      { venueId, Start_Date_Time, End_Date_Time },
      schema
    );

    if (result.error) {
      return res.status(401).send({ error: result.error.details[0].message });
    }
    venueID = result.value.venueId;
    Start_Date_Time = result.value.Start_Date_Time;
    End_Date_Time = result.value.End_Date_Time;

    try {
      let events = await Event.find({
        $and: [
          { venueId },
          { activeId: 1 },
          {
            $and: [{ status: { $ne: -1 } },{ status: { $ne: -2 } }]
          },
          {
            $or: [
              {
                $and: [
                  {
                    "date.startDate": {
                      $lte: new Date(`${Start_Date_Time}`)
                    },
                    "date.endDate": {
                      $gte: new Date(`${End_Date_Time}`)
                    }
                  }
                ]
              },
              {
                "date.startDate": {
                  $lte: new Date(`${End_Date_Time}`),
                  $gte: new Date(`${Start_Date_Time}`)
                }
              },
              {
                "date.endDate": {
                  $lte: new Date(`${End_Date_Time}`),
                  $gte: new Date(`${Start_Date_Time}`)
                }
              }
            ]
          }
        ]
      });

      const event_array = events.map(event => {
        return {
          id: event.id,
          name: event.name,
          startTime: event.date.startDate,
          endTime: event.date.endDate,
          status: event.status
        };
      });
      res.status(200).json(event_array);
    } catch (err) {
      if (err) return res.status(500).send({ error: err.errmsg });
    }
  }
};
