'use strict';

const test = require('tape');
const fs = require('fs');
const Slack = require('@slack/client');
const RtmClient = Slack.RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
let token;

test('App', (t) => {
  t.pass('should boot');

  //check for token
  if(fs.existsSync(__dirname + '/../.token')){
     t.pass('should have token');
     token = fs.readFileSync(__dirname + '/../.token', 'utf8').replace(/\n$/, '');
  }
  else{
    t.fail('should have token');
  }
  t.end();
});
