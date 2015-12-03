'use strict';

var P = require('bluebird');

module.exports = {
  connect: connect
};

/*--------------------------------------------------------------------------------*/

function connect(options) {
  return P.resolve({})
    .then(function (db) {
      /* Expose promise-based generic CRUD interface */
      return new Couchbase(db);
    })
    .catch(function (err) {
      /* Return standardized database errors */
      return P.reject(err);
    });
}

/*--------------------------------------------------------------------------------*/

function Couchbase(db) {
  this.create = create.bind(db);
  this.read   = read.bind(db);
  this.update = update.bind(db);
  this.delete = _delete.bind(db);
  return this;
}

function create() {
  var db = this;
  return P.resolve();
}

function read() {
  var db = this;
  return P.resolve();
}

function update() {
  var db = this;
  return P.resolve();
}

function _delete() {
  var db = this;
  return P.resolve();
}
