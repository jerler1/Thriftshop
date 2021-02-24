const mongoose = require("mongoose");
const Inventory = require("./inventory");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    storeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Storefront
    },
    customerName: {
        type: String,
        trim: true,
    },
    customerEmail: {
        type: String,
        trim: true,
    },
    purchasedItems: [
        {
            itemID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Inventory,
            },
            description: {
                type: String,
                ref: Inventory,
            }
        }
    ],
    status: {
        type: String,
        trim: true,
    }
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
