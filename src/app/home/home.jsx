var products = require('com/products/products');
var developments = require('com/developments/developments');
var ideas = require('com/ideas/ideas');
var u = require('com/u');

exports.controller = function() {
};

exports.view = function(ctrl) {
  return INCLUDE('home/home.tpl');
};
