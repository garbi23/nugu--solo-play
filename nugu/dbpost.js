var mysql = require('mysql')
let dbpost = {}


var connection = mysql.createConnection({
    host : 'mynugusql.c9utrsxn9yo6.ap-northeast-2.rds.amazonaws.com',
    user : 'root',
    password : 'xodnsqkqh233',
    database : 'nugudb'
  });
  
  connection.connect()
  

dbpost.Postcode = function(codestring) {

    var Post_Query = "UPDATE sensor SET srvalue = '"+codestring+"' WHERE srkind = 'temp'";
    connection.query(Post_Query, function(err, rows, fields){
        if(err){
          throw err
        }
     });
}

module.exports = dbpost;
