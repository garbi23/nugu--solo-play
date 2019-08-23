var mysql = require('mysql')
var soil = {}
let srstat = 0
let rank = 0

var connection = mysql.createConnection({
  host : 'mynugusql.c9utrsxn9yo6.ap-northeast-2.rds.amazonaws.com',
  user : 'root',
  password : 'xodnsqkqh233',
  database : 'NuguRank'
});

connection.connect()



soil.value = function(num){
    var Dupli_Query = "SELECT t.score, (SELECT COUNT(*) FROM tsnrank WHERE score >= t.score) AS rank FROM tsnrank t WHERE score = '"+num+"';"
    connection.query(Dupli_Query, function(err, rows, fields){
        if(err){
          throw err
        }
        console.log(rows)
     });
  return rank;
}


module.exports = soil;
