
const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'demouser',
  password: '1234',
  database: 'docket'
});

var currentDate = new Date();


app.post('/getMeetings', function (req, res) {
    connection.query(
        'SELECT * FROM `appointments` WHERE `nameid` = ?', 
        [req.body.user],
        function(err, results, fields) {
          if (err != null) {
              console.log(err);
          }
          //var returnValue = [];
          var returnValue = results;
  
          /*for (var i = 0; i < results.length; i++) {
              returnValue.push({
                  id: results[i].id,
                  date: results[i].date,
                  time: results[i].time,
                  priority: results[i].priority,
                  client: results[i].client,
                  place: results[i].place,
                  workload: results[i].workload,
                  preperation_done: results[i].preperation_done
              });
          }*/
  
          res.send(returnValue);
        }
      );
  });
  app.get('/getMeeting', function (req, res) {
    connection.query(
        'SELECT * FROM `appointments` WHERE `nameid` = ?', 
        ['LukKa'],
        function(err, results, fields) {
          if (err != null) {
              console.log(err);
          }
          //var returnValue = [];
          var returnValue = results;
  
          /*for (var i = 0; i < results.length; i++) {
              returnValue.push({
                  id: results[i].id,
                  date: results[i].date,
                  time: results[i].time,
                  priority: results[i].priority,
                  client: results[i].client,
                  place: results[i].place,
                  workload: results[i].workload,
                  preperation_done: results[i].preperation_done
              });
          }*/
  
          res.send(returnValue);
        }
      );
  });

app.post('/getClients', function (req, res) {
	connection.query(
		'SELECT * FROM `appointments` WHERE `nameid` = ? order by `client`', 
		[req.body.user],
		function(err, results, fields) {
		  if (err != null) {
			  console.log(err);
		  }
		  //var returnValue = [];
		  var returnValue = results;
  
		  /*for (var i = 0; i < results.length; i++) {
			  returnValue.push({
				  id: results[i].id,
				  date: results[i].date,
				  time: results[i].time,
				  priority: results[i].priority,
				  client: results[i].client,
				  place: results[i].place,
				  workload: results[i].workload,
				  preperation_done: results[i].preperation_done
			  });
		  }*/
  
		  res.send(returnValue);
		}
	  );
  });

app.post('/nextMeeting', function (req, res) {
	connection.query(
		'SELECT * FROM `appointments` WHERE `nameid` = ? and `date` >= ? order by `date`,`time` limit 1', 
		[req.body.user, currentDate],
		function(err, results, fields) {
		  if (err != null) {
			  console.log(err);
		  }
		  res.send(results);
		  var returnValue = {
			  name: req.body.user,
			  appointments: []
		  };
		}
	  );
  });
 
app.listen(3000);