const ParticipantsCreate = require("../participants/model/create");
const OptionCreate = require("../options/model/reab");
const ParticipantsChoseCreate = require("./model/create");

class ParticipantsChoseController {
  static async addParticipantsChose(req, res, next) {
    try {
      const participantInfo = req.body;
      const pollsListLd = req.params.id;
      if (participantInfo.participantName) {
        const participantId = await ParticipantsCreate.addParticipant(participantInfo.participantName, pollsListLd);
        await Promise.all(participantInfo?.choses.map(async (item)=>{
          const choseId = await OptionCreate.getOptionsID(item.optionName, pollsListLd);
          if(choseId.length > 0) {
            await ParticipantsChoseCreate.addParticipantChose(participantId, choseId[0].id);
          }
        }));
        res.json("data is update");
      } else {
        res.status(400).json("data is not valid");
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ParticipantsChoseController;
