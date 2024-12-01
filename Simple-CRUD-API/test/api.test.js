const request = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('CRUD API Tests', () => 
{
  it('should create an item', (done) => 
 {
    request(app)
      .post('/items')
      .send({ id: '1', name: 'Test Item' })
      .expect(201)
      .end((err, res) => 
      {
        if (err) return done(err);
        expect(res.body.message).to.equal('Item created');
        done();
      });
  });

  it('should retrieve all items', (done) => 
  {
    request(app)
      .get('/items')
      .expect(200)
      .end((err, res) => 
      {
        if (err) return done(err);
        expect(res.body).to.be.an('array').with.lengthOf(1);
        done();
      });
  });

  it('should retrieve a single item by ID', (done) => 
  {
    request(app)
      .get('/items/1')
      .expect(200)
      .end((err, res) => 
      {
        if (err) return done(err);
        expect(res.body).to.have.property('name', 'Test Item');
        done();
      });
  });

  it('should update an item', (done) => 
  {
    request(app)
      .put('/items/1')
      .send({ name: 'Updated Item' })
      .expect(200)
      .end((err, res) => 
      {
        if (err) return done(err);
        expect(res.body.item.name).to.equal('Updated Item');
        done();
      });
  });

  it('should delete an item', (done) => 
  {
    request(app)
      .delete('/items/1')
      .expect(200)
      .end((err, res) => 
      {
        if (err) return done(err);
        expect(res.body.message).to.equal('Item deleted');
        done();
      });
  });
});
