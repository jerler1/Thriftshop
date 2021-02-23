const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
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

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
