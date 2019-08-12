var mysql = require('mysql')
var soil = {}
let srstat = 0
let water = 0
let temp = 0
let humi = 0

var Dupli_Query = "SELECT DISTINCT srvalue FROM sensor;";

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
         water = rows[3].srvalue
          temp = rows[1].srvalue
          humi = rows[2].srvalue
      });
},500);


soil.value = function(){

      return water;
}
soil.tempvalue = function(){

  return temp;
}
soil.humivalue = function(){

  return humi;
}

soil.stat = function(){
    if(water <= 30){
        srstat = '물이 부족합니다! 어서 물을 주세요!'
       }else if(water > 30 && water < 80){
        srstat = '물이 적당합니다!'
       }else{
        srstat = '물이 충분합니다!'
       }
      return srstat;
}


module.exports = soil;
