const OptionCreate = require("./model/create");
const PollCreate = require("../pollsList/model/create");

function randomLink(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
class Options {
  static async creatPoll(req, res, next) {
    const updataData = req.body;
    const userId = req.jwt_payload.id;
    if (updataData.options && updataData.options.length > 0) {
      const link = randomLink(6);
      let keyStr = "";
      let valueStr = "";
      for (const [key, value] of Object.entries(updataData)) {
        if (key == "title" || key == "description" || key == "creator_name" || key == "creator_email") {
          keyStr += `${key}, `;
          valueStr += `'${value || ""}', `;
        }
      }
      const insertId = await PollCreate.createPoll(keyStr, valueStr, userId, link);
      updataData.options.forEach((title) => {
        OptionCreate.createOption(title, insertId);
      });
      res.status(200).json({ link: link, poll_id: insertId });
    } else {
      res.status(401).json("there is no options");
    }
  }
}

module.exports = Options;
