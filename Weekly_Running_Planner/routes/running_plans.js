var express = require("express");
var router = express.Router();
var MySql = require('sync-mysql');
var connection_info = require("../modules/connection_info")

router.get('/', function(req, res, next) {
  var connection = new MySql({
    host: connection_info.host,
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database
  });
  var running_plans = connection.query("SELECT * from running_plans");
  //below line for reading routes info for plan creator or do i need another router.get('/' function (if possible)?
  //var routes = connection.query("SELECT * from routes");
  console.log(running_plans);
  res.render('running_plans', { title: 'Express', running_plans:running_plans });
  //res.render('running_plans', { title: 'Express', running_plans:running_plans, routes:routes });
});

router.get('/add', function(req, res, next){
  res.render('add_running_plan')
})
router.post('/add', function(req, res, next) {
  var monday = req.body.monday
  var tuesday = req.body.tuesday
  var wednesday = req.body.wednesday
  var thursday = req.body.thursday
  var friday = req.body.friday
  var saturday = req.body.saturday
  var sunday = req.body.sunday
  var connection = new MySql({
    host: connection_info.host,
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database
  })
  connection.query("INSERT INTO running_plans (monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES ((?), (?), (?), (?), (?), (?), (?));", [monday, tuesday, wednesday, thursday, friday, saturday, sunday]);
  res.redirect("/running_plans");
})

router.get('/delete', function(req, res, next) {
  var running_plan_id = req.query.running_plan_id
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  });
  connection.query("DELETE FROM running_plans where running_plan_id = (?);", [running_plan_id])
  res.redirect('/running_plans')
})

module.exports = router;
