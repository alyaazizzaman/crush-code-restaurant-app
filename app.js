'use strict';

//require dotenv
require('dotenv').load();

//require express
var express = require('express'),
app = express();

//require handlebars
var hbs = require('handlebars');
app.set('view engine', 'hbs');

//require knex
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABSE_URL,
});

//set up server
app.listen(3000, function() {
  console.log("Server is up and running!");
});
