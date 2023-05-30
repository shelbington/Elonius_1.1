require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const smsController = require('./controllers/smsController');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', smsController.handleSMS);

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
