const assert = require('assert');
const app = require('../../src/app');

describe('\'clock\' service', () => {
  it('registered the service', () => {
    const service = app.service('clock');

    assert.ok(service, 'Registered the service');
  });
});
