const OptionCreate = require("./model/create")
class Options{
  static async creatPoll(req, res, next) {
    const updataData = req.body;
    if(updataData.options && updataData.options.lengh > 0) {
      const userId = req.jwt_payload;
      const link = 'uhuushu';
      OptionCreate.createPoll(updataData, userId, link);
      res.status(200).json({link: link});
    } else {
      res.status(401).json('there is no potion');
    }
  }
}

module.exports = Options;