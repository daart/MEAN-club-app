(function () {
  'use strict';

  var
    mongoose = require('mongoose'),
    productSchema = mongoose.Schema({
      name: {type: String, required: true},
      snippet: {type: String},
      price: {type: Number, default: 0 }
    }),

    ProductModel = mongoose.model('Product', productSchema);

    module.exports = ProductModel;

})();
