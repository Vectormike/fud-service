const mongoose = require('mongoose');
const validator = require('validator');

const vendorSchema = mongoose.Schema(
  {
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    items: [{ name: String, description: String, price: Number }],
    deliveryFee: {
      type: Number,
      required: true,
      trim: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
