'use strict';

//require dotenv
require('dotenv').load();

//require express
var express = require('express'),
app = express();

//require handlebars
var hbs = require('handlebars');

//view engine setup
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//require knex
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABSE_URL,
});

//require route to index.js
var routes = require('./routes/index');
app.use('/', routes);

//set up server
app.listen(3000, function() {
  console.log("Server is up and running!");
});
