var express = require('express');
var router = express.Router();
var MySql = require('sync-mysql');
var connection_info = require("../modules/connection_info")
var { validator, body } = require('express-validator');

router.get('/', function(req, res, next) {
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  })
  var routes = connection.query('select * from routes;')
  res.render('index', { title: 'Routes', routes:routes, page_header: '', link: '' });
});

router.get('/add', function(req, res, next){
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  });
  var routes = connection.query('select * from routes;')
  res.render('add_route', { routes: routes} )
});
router.post("/add", body('route_name').escape(), body('run_type').escape(), body('distance').escape(), function(req, res, next) {
  var route_name = req.body.route_name
  var run_type = req.body.run_type
  var distance = req.body.distance
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  });
  connection.query("INSERT INTO routes(route_name, run_type, distance) VALUES ((?), (?), (?));", [route_name, run_type, distance]);
  console.log(req.body)
  res.redirect("/")
})

router.get('/delete', function(req, res, next) {
  var route_id = req.query.route_id
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  });
  connection.query("DELETE FROM routes where route_id = (?);", [route_id])
  res.redirect("/")
})

module.exports = router;