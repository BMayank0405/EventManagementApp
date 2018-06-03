const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

signToken = user => {
  return JWT.sign({ user }, JWT_SECRET, {
    expiresIn: 7200
  });
};

module.exports = {
  login: async (req, res, next) => {
    const user = req.user;
    const payload = {
      id: user.id
    };
    try {
      const token = await signToken(payload);
      return res.status(200).json({ token: token, flag: user.flag ,name: user.name });
    } catch (err) {
      if (err) return res.status(500).send({ error: err.errmsg });
    }
  }
};
