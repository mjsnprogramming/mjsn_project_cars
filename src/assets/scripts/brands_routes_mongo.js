let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let brand_model = require('../models/brand_model');

router.get('/brands', (req, res, next) => {
  brand_model.find((err, docs) => {
    if (!err) {
      res.render('list', {
        data: docs
      });
    }
    else {
      console.log('Failed to retrieve the list ' + err);
    }
  });
  module.exports = router;
});

