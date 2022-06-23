const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/');

app.get('/', (req, res) => {
  res.status(200).json({ code: 200, message: 'OK' });
});

app.listen(config.backend.port)