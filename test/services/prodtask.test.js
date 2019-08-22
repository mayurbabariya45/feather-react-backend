const assert = require('assert');
const app = require('../../src/app');

describe('\'prodtask\' service', () => {
  it('registered the service', () => {
    const service = app.service('prodtask');

    assert.ok(service, 'Registered the service');
  });
});
