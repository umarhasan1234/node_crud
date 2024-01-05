const express=require("express");
const bodyParser=require("body-parser");




const mainFile=require('./routes/main');
const testFile=require('./routes/test');
const connectionFile=require('./connectionDB');
const crudFile=require('./routes/crud');
const app=express();



app.use('',mainFile);
app.use('',testFile);
app.use('',crudFile);
app.use(bodyParser.json());








const port=8000;
app.listen(port,()=>{
    console.log(`Server started on port: ${port}`);
});




