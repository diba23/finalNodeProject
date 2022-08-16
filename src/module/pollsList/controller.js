const PollReader = require("./model/read");
const PollUpdate = require("./model/update");
const OptionsReader = require("../options/model/reab")

async function findOneByPollId(paramId, userId) {
  const OnePolls = await PollReader.getOnePoll(userId.id, paramId);
  if (OnePolls.length > 0) {
    return OnePolls;
  } else {
    return [];
  }
}

class PollsList {
  static async showAllPolls(req, res, next) {
    const userId = req.jwt_payload;
    const allPolls = await PollReader.getAllPolls(userId.id);
    const pollsOptions = await Promise.all(
      allPolls.map(async (item) => {
        const allOptions = await OptionsReader.getAllOptionsByPollsListId(item.id);
        const participantCount = await PollReader.participantsCount(item.id);
        return { ...item, options: allOptions, participant_count: participantCount[0]['count(*)'] };
      })
    );
    res.json(pollsOptions);
  }
  static async showOnePollById(req, res, next) {
    try {
      const paramId = req.params.id;
      const userId = req.jwt_payload;
      const pollsOptions = await findOneByPollId(paramId, userId);
      res.json(pollsOptions);
    } catch (err) {
      console.error(err);
    }
  }
  static async edithOnePolls(req, res, next) {
    try {
      const updatedData = req.body;
      if (updatedData && updatedData.id){
        PollUpdate.updateData(updatedData);
        res.json("hi");
      } else {
        res.status(401).json("data is not valid");
      }
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = PollsList;


      // for (const [key, value] of Object.entries(updatedData)) {
      //   if(value) {
      //     pollsOptions[0][key] = value;
      //   }
      // }