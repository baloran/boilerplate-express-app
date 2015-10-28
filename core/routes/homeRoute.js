/**
 * Boilerplate Express App
 * Home Route
 * Arnaud Allouis aka Baloran
 */

var express = require('express');
var homeController = require('../controller/homeController');
var homeRoutes;


homeRoutes = function () {
  var router = express.Router();

  /**
   * GET /
   * display index
   */
  router.get('/', homeController.index);

  return router;
}

module.exports = homeRoutes;