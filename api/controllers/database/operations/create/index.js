'use strict';

var P = require('bluebird');

module.exports = {
  address:  createWalletAddress,
  currency: createCurrencyUnit,
  transaction: {
    request: createTransactionRequest,
    record:  createTransactionRecord
  }
};

/*--------------------------------------------------------------------------------*/

function createWalletAddress() {
  var db = this;
  return P.resolve();
}

function createCurrencyUnit() {
  var db = this;
  return P.resolve();
}

function createTransactionRequest() {
  var db = this;
  return P.resolve();
}

function createTransactionRecord() {
  var db = this;
  return P.resolve();
}
