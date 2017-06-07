const express = require('express');
const app = express();

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.get('/',function(req, res){
	res.render('index');
})
app.listen(3000,function(){
	console.log("Server is running on port number 3000");
})