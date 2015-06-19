// set PORT=1980
// node bootstrap.js (this file)

var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('express server listening on port ' + server.address().port);
});