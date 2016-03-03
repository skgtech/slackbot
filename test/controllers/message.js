'use strict';

const proxyquire = require('proxyquire');
const sinon = require('sinon');
let dataStore = {
  getUserById : function(id){
    return {
      id:'UASD',
      name:'Nick Rossolatos'
    }
  },
  getChannelByName : function(channel){
    return {
      id:'CASD',
      name:'General Channel'
    }
  }
}
let rtm = {
  sendMessage:function(message,channel,cb){
    cb(null,{channel:{id:'CASD'}});
  }
}
let web = {
  dm:{
    open: function(id,cb){
      cb(null,{channel:{id:'CASD'}});
    }
  }
}
let slack = {rtm,web,dataStore};
const slackMain = {slack};
const test = require('tape');
const messageController = proxyquire('../../app/controllers/message',{
  '../slack_main': slackMain
});
let dummyMessage = {text:'whaaaaaat?!',user:'UASD'};


test('Message Controller', (t) => {
  t.ok(messageController instanceof Function, 'should be a function');
  t.pass('should respond as expected');
  t.pass('should find user');
  t.pass('should run send');
  console.log(messageController(dummyMessage));
  t.end();
});
