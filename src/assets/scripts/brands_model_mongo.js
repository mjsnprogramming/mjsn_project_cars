import {Int32} from "bson";

const mongoose = require('../database');

let brand_schema = new mongoose.Schema({
  name: String,
  country: String,
  year_of_create: Int32,
  year_of_liquidation: Int32,
  city: String,
  current_location: String,
  founders: String
});

let brand_model = mongoose.model('brands', brand_schema);

module.exports = mongoose.model('Brands', brand_model);
