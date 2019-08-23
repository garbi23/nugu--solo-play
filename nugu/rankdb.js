var mysql = require('mysql')
var soil = {}
let srstat = 0
let rank = 0

var Dupli_Query = "INSERT INTO tsnrank(id, score) values(default,1400);"+
"SELECT t.id, t.score, (SELECT COUNT(*) FROM  tsnrank WHERE score >= t.score) AS rank FROM tsnrank  t WHERE score = '1400';";

var connection = mysql.createConnection({
  host : 'mynugusql.c9utrsxn9yo6.ap-northeast-2.rds.amazonaws.com',
  user : 'root',
  password : 'xodnsqkqh233',
  database : 'nugudb'
});

connection.connect()


var revalue = setInterval(function()
{
    connection.query(Dupli_Query, function(err, rows, fields){
         if(err){
           throw err
         }
          temp = rows[0].rank
      });
},100);


soil.value = function(){

  return rank;
}


module.exports = soil;
