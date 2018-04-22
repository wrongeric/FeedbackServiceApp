const express = require('express');
const app = express(); 

//route handler
app.get('/', (req, res) => { //route handler that is watching for http request with a specific method - app.get/post/put/delete/patch
    res.send({hi: 'there'});
});


const PORT = process.env.PORT || 5000;     //environment variables - allows Heroku's opportunity to pass us runtime configurations only after we have actually deployed our operation
//Dev Environment = use 5000 - deployment = whatever Port Heroku wants us to use.
app.listen(5000); //telling node js runtime watch out for traffic on localhost:5000

