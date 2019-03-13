const express = require('express');
const history = require('connect-history-api-fallback');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('combined'));
app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use(history);
app.get('/index.html', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
