var app = require('../app');
var request = require('supertest');

describe('/ route',
  function () {
    describe('GET /',
      function () {
        it('should respond with content',
          function (done) {
            request(app)
              .get('/')
              .expect('Content-TypeX', /text\/html/)
              .expect(200, done);
          }
        );
      }
    );
  }
);
