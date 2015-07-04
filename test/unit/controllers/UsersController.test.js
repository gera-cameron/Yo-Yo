/*var request = require('../../../api/controllers/CourseController');

var should = require('should'),
    supertest = require('supertest');

describe('should check the login username function', function(){

      it('should have username', function(done) {

          supertest(request).get('/username')
          .expect(!null).end(function (err, res){

            if (err) throw err;
            res.status.should.equal(200);
            done();
          });
      });
});
describe('should check the login password function', function(){

      it('should have password', function(done) {

          supertest(request).get('/password')
          .expect('String').end(function (err, res){

            if (err) throw err;
            res.status.should.equal(200);
            done();
          });
      });
});
var request = require('supertest')
  , express = require('express');

var app = express();

app.get('/user', function(req, res){
  res.send(200, { name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '20')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  });

  describe('GET /users', function(){
  it('respond with json', function(done){
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
var should = require('should');

var user = {
    name: 'tj'
  , pets: ['tobi', 'loki', 'jane', 'bandit']
};

user.should.have.property('name', 'tj');
user.should.have.property('pets').with.lengthOf(4);

// if the object was created with Object.create(null)
// then it doesn't inherit `Object` and have the `should` getter
// so you can do:

should(user).have.property('name', 'tj');
should(true).ok;

someAsyncTask(foo, function(err, result){
  should.not.exist(err);
  should.exist(result);
  result.bar.should.equal(foo);
});*/
describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
})
