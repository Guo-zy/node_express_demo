const express = require('express');
const app = express();
const mangoose = require('mongoose');
const todolist = require('./src/router/index');
const bodyParser = require('body-parser');

mangoose.connect('mongodb://localhost/test').then(() => {
  console.log('mongodb connect success');
});

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(bodyParser.json());
app.use('/todolist', todolist);

const server = app.listen(8888, '127.0.0.1', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(' http://%s:%s', host, port);
});
