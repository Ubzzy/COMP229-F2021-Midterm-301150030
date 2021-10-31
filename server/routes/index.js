// index.js - Ubaid Delawala - 301150030 - midterm-ubaid.herokuapp.com

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: book
   });
});

module.exports = router;
