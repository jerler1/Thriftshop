const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    storeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Storefront
    },
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer
    },
    //TODO: Add array of items to be purchased.
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
