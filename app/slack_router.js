var teamJoin = require('./controllers/team_join');
var slackMain = require('./slack_main');

module.exports = () => {
  /*
   * Main router that will delegate messages to controllers
   */
  slackMain.slack.on('raw_message', (message) => {

    let type = message.type;

    console.log(new Date(), type, ' message received.');

    if(type === 'team_join') {
      teamJoin._handleMessage(message);
    }

  });
};
