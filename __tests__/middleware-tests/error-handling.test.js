'use strict';

const supertest = require('supertest');
const { app } = require('../../src/server');
const { sequelize} = require('../../src/models/index.js');
const request = supertest(app);


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.sync();
});
// mocking routes
describe('Server Routes', () => {

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('this is a bad route');
  });
});