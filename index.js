var firebase	= require('firebase-admin');
var express 	= require('express');

firebase.initializeApp({
	databaseURL: process.env.firebase,
	credential: firebase.credential.cert(JSON.parse(process.env.googleJson))
});
var db = firebase.firestore();



var app = express();
app.set('port', (process.env.PORT || 5000));
app.get('/', (request, response)=>{
	response.redirect('https://a.alphabetize.us/#/project/resumes');
})
app.get('/:id', (request, response)=>{
	let ref = db.collection(`shortCode/res2me/list`).doc(request.params.id);
	ref.get().then(r=>{
		let sc = r.data();
		response.redirect(sc.url);
	})
})

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});