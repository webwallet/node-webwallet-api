'use strict';

var endpoint = '/currency';
var GET      = 'GET';
var PUT      = 'PUT';
var POST     = 'POST';
var DELETE   = 'DELETE';
var P        = require('bluebird');

module.exports = {
  POST:  postCurrency
};

/*--------------------------------------------------------------------------------*/

function postCurrency(request) {  
  return P.resolve({
    properties: {},
    entities: [],
    actions: [],
    links: []
  });
}

/*--------------------------------------------------------------------------------*/
