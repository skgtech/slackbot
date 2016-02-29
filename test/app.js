'use strict';

const test = require('tape');
const fs = require('fs');

test('App', (t) => {
  t.pass('should boot');
  t.ok(fs.existsSync(__dirname + '/../.token'),'should have token')
  t.end();
});
