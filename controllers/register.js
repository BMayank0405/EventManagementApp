const User = require("../models/user");
const nodemailer = require("nodemailer");

module.exports = {
  register: async (req, res, next) => {
    const {
      username,
      password,
      flag,
      name,
      email
    } = req.value.body;
    const society = [0, 1, 2];
    const faculty = [3, 4 ,5];
    let faculty_check = false;
    let headId = null;
    let facultyId = null;

    try {

      let user = await User.findOne({
        username
      });
      if (user)
        return res.status(403).send({
          error: "Username is already in use"
        });
      let newUser = {};


      if (faculty.includes(flag)) {
        newUser = new User({
          username,
          password,
          flag,
          name,
          email
        });
      } else {
        newUser = new User({
          username,
          password,
          flag,
          name,
          email,
          headId: req.value.body.headId,
          facultyId: req.value.body.facultyId
        });
      }
      try {
        await newUser.save();

        //send a mail to the registered user
        let transporter = nodemailer.createTransport({
          host: "mail.evencargo.in",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "mayank@evencargo.in", // generated ethereal user
            pass: "oye@1234" // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        // setup email data with unicode symbols
        let mailOptions = {
          from: "mayank@evencargo.in",
          to: `${email}`,
          subject: 'Your account has been created',
          text: 'welcome',
          html: `<b>${name}</b> your account has been created <br> <b>username : ${username}</b> <br> <b>password: ${password}</b>`
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error)
            return res
              .status(500)
              .send({
                error: error
              });

          return res.status(200).json({
            message: "user added successfully"
          });
        });


      } catch (err) {
        if (err)
          return res.status(403).send({
            error: err.errmsg
          });
      }
    } catch (err) {
      if (err)
        return res.status(403).send({
          error: err.errmsg
        });
    } //end of first try catch
  }
};