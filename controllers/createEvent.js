const Joi = require("joi");
const User  = require("../models/user")
const Event = require("../models/event");

module.exports = {
  createEvent: async (req, res, next) => {
    let { name, description, date, time, coordinator, formUrl } = req.body;
    let venueId = `${req.body.venueId}`;
    const { id,flag } = req.user;
    let Start_Date_Time = `${date.startDate}T${time.startTime}:00Z`;
    let End_Date_Time = `${date.endDate}T${time.endTime}:00Z`;
    let coordinatorName = coordinator.name;
    let coordinatorPhone = coordinator.phone;
    const societyId = id;
    let type;
    if(flag == 2) {
      type = req.body.Type; 
    }
    console.log(type)

    const schema = Joi.object().keys({
      name: Joi.string()
        .min(2)
        .max(30)
        .required(),
      description: Joi.string()
        .min(30)
        .required(),
      Start_Date_Time: Joi.date()
        .min("now")
        .required(),
      End_Date_Time: Joi.date()
        .min(Joi.ref("Start_Date_Time"))
        .required(),
      coordinatorName: Joi.string()
        .min(2)
        .max(30)
        .required(),
      coordinatorPhone: Joi.number()
        .integer()
        .positive()
        .required(),
      formUrl: Joi.string().uri()
    });

    const result = Joi.validate(
      {
        name,
        description,
        Start_Date_Time,
        End_Date_Time,
        coordinatorName,
        coordinatorPhone,
        formUrl
      },
      schema
    );
    if (result.error) {
      return res.status(400).json(result.error.details[0].message);
    }
    name = result.value.name;
    description = result.value.description;
    Start_Date_Time = result.value.Start_Date_Time;
    End_Date_Time = result.value.End_Date_Time;
    coordinatorName = result.value.coordinatorName;
    coordinatorPhone = result.value.coordinatorPhone;
    formUrl = result.value.formUrl;

    try {
      let events = await Event.find({
        $and: [
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
          },
          { venueId },
          { activeId: 1 },
          {
            $and: [{ status: { $ne: -1 } },{ status: { $ne: -2 } }]
          }
        ]
      });
      //end   of query
      if (events.length > 0)
        return res.status(403).send({ error: "check your timings again" });

      const validDate = {
        startDate: new Date(`${Start_Date_Time}`),
        endDate: new Date(`${End_Date_Time}`)
      };
      const validCoordinator = {
        name: coordinatorName,
        phone: coordinatorPhone
      };
      try {
        let approvals = await User.findById({ _id:id }, "headId facultyId");
        let headID ;
        if(flag == 0)
        headID = approvals.headId.cultural;
        else if(flag == 1)
        headID = approvals.headId.technical;
        else if (flag == 2) {
          if(type  == 0)
          headID  =  approvals.heaId.cultural;
        else if(flag == 1) 
          headID  =  approvals.heaId.technical;
        }
        console.log(headID)

        const newEvent = new Event({
          name,
          description,
          venueId,
          date: validDate,
          societyId,
          headId: headID,
          facultyId: approvals.facultyId,
          coordinator: validCoordinator,
          formUrl
        });
        try {
          await newEvent.save();
          res.status(200).json({ message: "event added successfully" });
        } catch (err) {
          if (err) {
            console.log(err);
            return res.status(500).send({
              error: err.errmsg
            });
          }
        }
      } catch (err) {}
    } catch (err) {
      if (err)
        return res.status(500).send({
          error: err.errmsg
        });
      else return res.status(500).send({
        error:"Internal Server Error"
      })
    }
  }
};
