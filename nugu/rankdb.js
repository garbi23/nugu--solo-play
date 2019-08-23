var mysql = require('mysql')
var soil = {}
let srstat = 0
let rank = 0

var connection = mysql.createConnection({
  host : 'mynugusql.c9utrsxn9yo6.ap-northeast-2.rds.amazonaws.com',
  user : 'root',
  password : 'xodnsqkqh233',
  database : 'nugudb'
});

connection.connect()



soil.value = function(num){
    var Dupli_Query = "INSERT INTO tsnrank(id, score) values(default,"+ num +");"
    connection.query(Dupli_Query, function(err, rows, fields){
        if(err){
          throw err
        }
         rank = rows[0].rank
     });
  return rank;
}


module.exports = soil;
