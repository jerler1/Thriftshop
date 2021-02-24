const mongoose = require("mongoose");
const Storefront = require("../models/storefront");
const Employee = require("../models/employee");

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/thriftshop", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });

let storefrontSeed = [
    {
        name: "Nathan's Thrift Shop",
        owner: "Nathan Castaldi",
        address1: "123 Main St",
        address2: "",
        city: "Atlanta",
        state: "GA",
        zip: "30319",
        phone: "888-888-8888",
    }
]

let employeeSeed = [
    {
        firstname: {
            type: String,
            trim: true,
            required: true,
        },
        lastname: {
            type: String,
            trim: true,
            required: true,
        },
        username: {
            type: String,
            trim: true,
            required: true,
        },
        storefront: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Storefront,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            trim: true,
        },
    }
]

Storefront.deleteMany({})
    .then(() => Storefront.collection.insertMany(storefrontSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

Employee.deleteMany({})
    .then(() => Employee.collection.insertMany(employeeSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });