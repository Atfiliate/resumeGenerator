var firebase	= require('firebase-admin');
var express 	= require('express');

firebase.initializeApp({
	databaseURL: process.env.firebase,
	credential: firebase.credential.cert(JSON.parse(process.env.googleJson))
});


var app = express();

app.set('port', (process.env.PORT || 5000));


app.get('/', (request, response)=>{
	response.send(`
		<h1>Hi</h1>
	`)
})
app.get('/:id', (request, response)=>{
	response.send(`
		<h1>${id}</h1>
	`)
})

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});