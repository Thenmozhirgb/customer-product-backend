const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
  c_name: {
    type: String
  },
  customerid: {
    type: String
  },
  c_password: {
    type: String
  },
  c_email: {
    type: String
  },
  c_phone: {
    type: String
  },
  c_area: {
    type: String
  }
}, {
    collection: 'customers'
  })

module.exports = mongoose.model('Customer', customerSchema)