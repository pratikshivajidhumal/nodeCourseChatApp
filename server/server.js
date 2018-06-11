const express=require('express');
const path=require('path');
const publicPath=path.join(__dirname,'../public');

const port=process.env.PORT||3000;

var expressVariable=express();

//console.log(__dirname+'/../public');
console.log(publicPath);

expressVariable.use(express.static(publicPath));

expressVariable.listen(port,()=>
{
        console.log(`Server is up on port ${port}`);
});