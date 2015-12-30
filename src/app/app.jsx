var home = require('home/home');
var about = require('about/about');
var lamagia = require('lamagia/lamagia');
var layout = require('layout/layout');

m.route.mode = 'hash';
m.route(document.body, '/', {
	'/': layout(home),
	'/about': layout(about),
	'/lamagia': layout(lamagia)
});
