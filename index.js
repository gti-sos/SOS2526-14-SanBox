console.log("anitaaa")

let cool = require("cool-ascii-faces");
console.log(cool());


let express = require("express")
const  app  =  express ();

app.use( '/', express.static("./static"));

app.get ( '/' , ( req , res ) =>
    { res.send ( ' Hola Mundo ' ) } )    
  
app.listen ( 3000 , ( ) =>
    { console.log ( ' El servidor se está ejecutando en http://localhost:3000' ) } )

a