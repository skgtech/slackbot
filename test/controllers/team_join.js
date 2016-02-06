'use strict';

const assert = require('assert');
const teamJoinController = require('../../app/controllers/team_join');

describe('Controller', () => {
  it('should should be function', (done) => {
    assert.equal(typeof teamJoinController, 'function');
    done();
  });
});
