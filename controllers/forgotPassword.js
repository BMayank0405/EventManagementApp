const nodemailer = require("nodemailer");
const User = require("../models/user");

module.exports = {
  forgotPassword: async (req, res, next) => {
    const { username } = req.value.body;

    try {
      let user = await User.findOne({ username }, "id email");

      if (!user)
        return res
          .status(403)
          .json({ error: "Username is not present in database" });

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

      let chars ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
      let length = Math.random() * (20 - 10) + 10;
      let password = ""
      for (let x = 0 ; x < length ; x++) {
        var  i = Math.floor(Math.random() * chars.length);
        password += chars.charAt(i);
      }
      console.log(password)
      user.password = password; 

      try{
        await user.save();
      let email = user.email;

      let mailOptions = {
        from: "mayank@evencargo.in",
        to: `${email}`,
        subject: "Forgot Password",
        text: "Welcome",
        html: `Your new password  is ${password}`
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error)
          return res
            .status(500)
            .send({
              error: "there was some problem while sending mail to you"
            });

        return res.status(200).json({ message: "password successfully sent" });
      });
      }
      catch(err){

      }


    } catch (err) {
      if (err)
        return res.status(500).send({
          error: err.errmsg
        });
    }
  }
};
