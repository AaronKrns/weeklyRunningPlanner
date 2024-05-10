var express = require('express');
var router = express.Router();
var MySql = require('sync-mysql');
var connection_info = require("../modules/connection_info")

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
    user: 'root',
    password: 'ryte11/seRt62',
    host: connection_info.host,
    database: connection_info.database
  });
  var routes = connection.query('select * from routes;')
  res.render('add_route', { routes: routes} )
});
router.post("/add", function(req, res, next) {
  var route_name = req.body.route_name
  var distance = req.body.distance
  var elevation_profile = req.body.elevation_profile
  var terrain = req.body.terrain
  var connection = new MySql({
    user: 'root',
    password: 'ryte11/seRt62',
    host: connection_info.host,
    database: connection_info.database
  });
  connection.query("INSERT INTO routes(route_name, distance, elevation_profile, terrain) VALUES ((?), (?), (?), (?));", [route_name, distance, elevation_profile, terrain]);
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