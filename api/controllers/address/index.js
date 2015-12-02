'use strict';

var endpoint = '/address';
var GET      = 'GET';
var PUT      = 'PUT';
var POST     = 'POST';
var DELETE   = 'DELETE';
var P        = require('bluebird');

module.exports = {
  POST:  postWalletAddress
};

/*--------------------------------------------------------------------------------*/

function postWalletAddress(request) {  
  return P.resolve({
    properties: {},
    entities: [],
    actions: [],
    links: []
  });
}

/*--------------------------------------------------------------------------------*/
