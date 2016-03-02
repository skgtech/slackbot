'use strict';

const test = require('tape');
const teamJoinController = require('../../app/controllers/').teamJoin;

test('Controller', (t) => {
  t.ok(teamJoinController instanceof Function, 'should be a function');
  t.end();
});
