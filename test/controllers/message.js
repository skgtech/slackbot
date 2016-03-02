'use strict';

const test = require('tape');
const messageController = require('../../app/controllers/').message;

test('Message Controller', (t) => {
  t.ok(messageController instanceof Function, 'should be a function');
  t.end();
});
