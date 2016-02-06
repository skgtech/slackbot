const slackMain = require('./slack_main');

let teamJoin = module.exports = {};

teamJoin.handleMessages = () => {
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
}

teamJoin._handleMessage = (message) => {
    console.log(message);

    var generalChannel = slack.getChannelByName('general');
    var codingChannel = slack.getChannelByName('coding');
    var skgtechChannel = slack.getChannelByName('skgtech_io');
    var jobsChannel = slack.getChannelByName('jobs');
    var devitChannel = slack.getChannelByName('devitconf');

    var user = message.user;

    /*
     * @see https://api.slack.com/docs/formatting
     */
    var response =  `<@${user.id}|${user.name}> Hello! ` +
        `This is the advanced AI(a level beyond R2D2) bot built by the SKGTech team. I am welcoming you aboard. `+
        `This is the <#${generalChannel.id}|${generalChannel.name}> channel where we usually hang out. There is also the <#${codingChannel.id}|${codingChannel.name}>, the <#${skgtechChannel.id}|${skgtechChannel.name}> to get involved in our community, the <#${jobsChannel.id}|${jobsChannel.name}> to post a job and many more. ` +
        `Also check our currently running projects: `+
        `* DEVit Conference 2016: Wanna get involved? Go to <#${devitChannel.id}|${devitChannel.name}> `+
        `* Official SKGTech site needs your help. Give us a hand: https://github.com/skgtech/skgtech.github.io/issues `+
        `* SKG Together event: Got a team in Thessaloniki? Tell us about it.`

    channel.send(response);
};
