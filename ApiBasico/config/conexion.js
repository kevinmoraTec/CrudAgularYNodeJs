const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port:'8889',
    database: 'db_basico'
});

conexion.connect((err)=>{
    if(err){
        conexion.log('ha ocurrido un error :'+ err)
    }
    else
    {console.log(' la base de datos se conecto!!!')}
});

module.exports=conexion