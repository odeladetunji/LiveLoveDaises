var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var router = express.Router();

router.post('/', function (req, res) {

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'lovedaises'
    });
    connection.connect();  // connecting to mysql!

    (function(){
         var identity = req.body.recipientIdentity;
         var sql = 'select Email from registrationtable where daisesIdentity = ?';
         connection.query(sql, [identity], function(error, results, fields){
             if (error) {
                throw error; 
             }
             var recipientEmail = results[0].Email;
             (function () {
                 var sql = 'select * from timeshedule where email = ?';
                 connection.query(sql, [recipientEmail], function (error, results, fields) {
                     if (error) {
                         throw error;
                     }
                     var dataStore = {};
                     var arrayStore = [];
                     // the reason for pushing this things into this array is for validation sake, nothing more!
                     arrayStore.push(results[0].sundaytime);
                     arrayStore.push(results[0].mondaytime);
                     arrayStore.push(results[0].tuesdaytime);
                     arrayStore.push(results[0].wednesdaytime);
                     arrayStore.push(results[0].thursdaytime);
                     arrayStore.push(results[0].fridaytime);
                     arrayStore.push(results[0].saturdaytime);
                     arrayStore.push(results[0].sundaynote);
                     arrayStore.push(results[0].mondaynote);
                     arrayStore.push(results[0].tuesdaynote);
                     arrayStore.push(results[0].wednesdaynote);
                     arrayStore.push(results[0].thursdaynote);
                     arrayStore.push(results[0].fridaynote);
                     arrayStore.push(results[0].saturdaynote);
                    
                     if (arrayStore.length < 2) {
                         res.render('timeSchduleInquiryEmpty');
                     } else {
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
                         res.render('timeSchduleInquiry', { data: dataStore });
                     }
                 });
             })();
         })
    })();
})

module.exports = router;
