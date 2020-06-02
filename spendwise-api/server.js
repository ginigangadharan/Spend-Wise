const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;