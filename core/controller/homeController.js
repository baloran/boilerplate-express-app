/**
 * Boilerplate Express App
 * Home Controller
 * Arnaud Allouis aka Baloran
 */

var homeController;

homeController =  {

  index: function (req, res) {
    res.render('index');
  }
}

module.exports = homeController;