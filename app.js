let mysql = require('mysql') ;
let conexion = mysql.createConnection({
    host:'localhost',
    database: 'colegio',
    user:'root',
    password:'0123456789'
});

conexion.connect(function(error){
if(error){
    throw error;
}else{
    console.log("conexion exitosa");
}
});


//mostrar
conexion.query('SELECT*FROM matricula_2022', function(error, results, fields){
    if(error){
        throw error;
    }
    results.forEach(result=>{
        console.log(result);
    });
});
// conexion.end();
//insertar

// conexion.query('INSERT INTO matricula_2022 (idUser, nombres, apellidos, distrito, email, dni, telefono, procedencia, fecha_nacimiento, grado ) VALUES ("3","David", "smith", "san vicente", "david@gmail.com", "76068237", "926332451", "kety", "2002-07-28", "primaria")', function(error, results){
//     if(error){
//         throw error;
//     }else{
//         console.log("registro agregado");
//     }
// })


//actuazlizar 
// conexion.query('UPDATE matricula_2022 SET nombres="juan", apellidos="abelardo" WHERE idUser=3', function(error, results){
//     if(error){
//         throw error;
//     }else{
//         console.log("cambio exitoso");
//     }
// })



//borrar
// conexion.query('DELETE FROM matricula_2022 WHERE idUser=3', function(error, results){
//     if(error)throw error;
//     else console.log("registro eliminado", results);
// })
conexion.end();

