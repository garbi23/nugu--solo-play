var mysql = require('mysql')
var soil = {}
let srstat = 0
let srvalue = 0

var Dupli_Query = "SELECT DISTINCT srvalue FROM sensor;";

var connection = mysql.createConnection({
  host : 'mynugusql.c9utrsxn9yo6.ap-northeast-2.rds.amazonaws.com',
  user : 'root',
  password : 'xodnsqkqh233',
  database : 'nugudb'
});

connection.connect()

soil.value = function(){
    connection.query(Dupli_Query, function(err, rows, fields){
        if(err){
          throw err
        }
        for(var i=0; i < rows.length; i++){
          console.log(rows[i].srvalue)
          srvalue = rows[i].srvalue
        }
      });

      return srvalue;
}

soil.stat = function(){
    if(srvalue <= 30){
        srstat = '물이 부족합니다! 어서 물을 주세요!'
       }else if(srvalue > 30 && srvalue < 80){
        srstat = '물이 적당합니다!'
       }else{
        srstat = '물이 충분합니다!'
       }
      return srstat;
}


module.exports = soil;
