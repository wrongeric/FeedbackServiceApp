const express = require('express');
const app = express(); 

app.get('/', (req, res) => { //route handler that is watching for http request with a specific method - app.get/post/put/delete/patch
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);