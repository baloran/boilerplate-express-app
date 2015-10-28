/**
 * Boilerplate Express App
 * Bootstrap
 * Arnaud Allouis aka Baloran
 */

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV || 'development';
var routes = require('./routes');

module.exports = function (app) {

  app.set('view engine', 'html');
  app.set('views',path.join(path.normalize(__dirname + '/..'), 'client/views'));
  app.engine('html', require('ejs').renderFile);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: false
  }));

  app.use('/', routes.homeRoute());

  app.use(express.static(path.join(path.normalize(__dirname + '/..'), 'client')));

}