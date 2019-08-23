var mysql = require('mysql')
var soil = {}
let srstat = 0
let rank = 0
let score = 1002


var connection = mysql.createConnection({
  host : 'mynugusql.c9utrsxn9yo6.ap-northeast-2.rds.amazonaws.com',
  user : 'root',
  password : 'xodnsqkqh233',
  database : 'NuguRank'
});

connection.connect()

var revalue = setInterval(function()
{
    var Dupli_Query = "SELECT t.score, (SELECT COUNT(*) FROM tsnrank WHERE score >= t.score) AS rank FROM tsnrank t WHERE score = '"+score+"';"
    connection.query(Dupli_Query, function(err, rows, fields){
        if(err){
          throw err
        }
        rank = rows[0].rank
     });

},100);

soil.value = function(num){
      var INSERT_Query = "INSERT INTO tsnrank(id, score) values(default,"+ num +");"
      connection.query(INSERT_Query, function(err, rows, fields){
          if(err){
            throw err
          }
       });
       score = num
}

soil.bring = function(){
    return rank
}


module.exports = soil;
