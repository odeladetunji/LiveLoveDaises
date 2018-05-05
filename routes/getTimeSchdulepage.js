var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

router.post('/', function(req, res){
      var connection = mysql.createConnection({
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'lovedaises'
      });
     connection.connect();  // connecting to mysql!
     
     var recipientEmail;

     if ('personalEmail' in req.body) {
            if (req.body.personalEmail == "") { // this condition is for debugging!
              console.log('email value is empty/////////////');
              return;
            }
            // using anonymous function!
            (function () {
                  var sql = 'select * from timeshedule where email = ?';
                  connection.query(sql, [req.body.personalEmail], function (error, results, fields) {
                          if (error) {
                            throw error;
                          }
                          var dataStore = {}
                          if (results[0].sundaytime != '') {
                            dataStore["sundaytime"] = results[0].sundaytime;
                          } else {
                            dataStore['sundaytime'] = "";
                          }
                          if (results[0].mondaytime != '') {
                            dataStore['mondaytime'] = results[0].mondaytime;
                          } else {
                            dataStore['mondaytime'] = "";
                          }
                          if (results[0].tuesdaytime != '') {
                            dataStore['tuesdaytime'] = results[0].tuesdaytime;
                          } else {
                            dataStore['tuesdaytime'] = "";
                          }
                          if (results[0].wednesdaytime != '') {
                            dataStore['wednesdaytime'] = results[0].wednesdaytime;
                          } else {
                            dataStore['wednesdaytime'] = "";
                          }
                          if (results[0].thursdaytime != '') {
                            dataStore['thursdaytime'] = results[0].thursdaytime;
                          } else {
                            dataStore['thursdaytime'] = "";
                          }
                          if (results[0].fridaytime != '') {
                            dataStore['fridaytime'] = results[0].fridaytime;
                          } else {
                            dataStore['fridaytime'] = "";
                          }
                          if (results[0].saturdaytime != '') {
                            dataStore['saturdaytime'] = results[0].saturdaytime;
                          } else {
                            dataStore['saturdaytime'] = "";
                          }
                          if (results[0].sundaynote != '') {
                            dataStore["sundaynote"] = results[0].sundaynote;
                          } else {
                            dataStore['sundaynote'] = "";
                          }
                          if (results[0].mondaynote != '') {
                            dataStore['mondaynote'] = results[0].mondaynote;
                          } else {
                            dataStore['mondaynote'] = "";
                          }
                          if (results[0].tuesdaynote != '') {
                            dataStore['tuesdaynote'] = results[0].tuesdaynote;
                          } else {
                            dataStore['tuesdaynote'] = "";
                          }
                          if (results[0].wednesdaynote != '') {
                            dataStore['wednesdaynote'] = results[0].wednesdaynote;
                          } else {
                            dataStore['wednesdaynote'] = "";
                          }
                          if (results[0].thursdaynote != '') {
                            dataStore['thursdaynote'] = results[0].thursdaynote;
                          } else {
                            dataStore['thursdaynote'] = "";
                          }
                          if (results[0].fridaynote != '') {
                            dataStore['fridaynote'] = results[0].fridaynote;
                          } else {
                            dataStore['fridaynote'] = "";
                          }
                          if (results[0].saturdaytime != '') {
                            dataStore['saturdaynote'] = results[0].saturdaynote;
                          } else {
                            dataStore['saturdaynote'] = "";
                          }
                          res.send({"message": dataStore});
                          console.log('TimeSchedule Data was gotten successfully  ||  getTimeSchdulepage.js')
                          return;
                  });
                })();
       return;
     }

     if ('formData' in req.body) {
         function updateTimeSchedule() {
              var dataToUpdate = {
                  "sundaytime": req.body.sundaytime,
                  "mondaytime": req.body.mondaytime,
                  "tuesdaytime": req.body.tuesdaytime,
                  "wednesdaytime": req.body.wednesdaytime,
                  "thursdaytime": req.body.thursdaytime,
                  "fridaytime": req.body.fridaytime,
                  "saturdaytime": req.body.saturdaytime,
                  "sundaynote": req.body.sundaynote,
                  "mondaynote": req.body.mondaynote,
                  "tuesdaynote": req.body.tuesdaynote,
                  "wednesdaynote": req.body.wednesdaynote,
                  "thursdaynote": req.body.thursdaynote,
                  "fridaynote": req.body.fridaynote,
                  "saturdaynote": req.body.saturdaynote
              }

              var sql = 'update timeschedule set ?';
              connection.query(sql, dataToUpdate, function (error, results, fields) {
                if (error) {
                  throw error;
                }

                res.send({'message': 'successful'});
                console.log('Time Line updated successfully!!');
              });
         }

        updateTimeSchedule();
        return;
     }

     res.render('timeSchdule');
     return;
})

module.exports = router;
