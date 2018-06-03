module.exports = {
  flagReturn: async (req, res, next) => {
    const flag = req.user.flag;
    return res.status(200).json({ flag});
  }
};
