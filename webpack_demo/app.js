const express = require('express');

var app = express();
app.listen(3000, () => {
	console.log('Server Listening on 3000...');
});

app.use(express.static('./'));