const ParticipantsReader = require("./model/read");
const PollReader = require("../pollsList/model/read");
const OptionsReader = require("../options/model/reab");
const ParticipantsChoseReader = require("../participantsChose/model/read");

class Participants {
  static async showAllPollChose(req, res, next) {
    try {
      const paramLink = req.params.link;
      const onePoll = await PollReader.getOnePollByLink(paramLink);
      const allOptions = await OptionsReader.getAllOptionsByPollsListId(
        onePoll[0].id
      );
      onePoll[0].Options = allOptions;

      const allParticipants =
        await ParticipantsReader.getAllparticipantsByPollId(onePoll[0].id);
      const participantsChose = await Promise.all(
        allParticipants.map(async (item) => {
          const chose = await ParticipantsChoseReader.getAllChose(item.id);
          return { ...item, participants_chose: chose };
        })
      );
      onePoll[0].participants = participantsChose;

      res.json(onePoll);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Participants;
