const express = require('express');
const app = express();
app.get('/',function(req, res){
	res.send("Hello world example");
})
app.listen(3000,function(){
	console.log("Server is running on port number 3000");
})