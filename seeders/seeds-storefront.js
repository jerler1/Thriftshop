const mongoose = require("mongoose");
const Storefront = require("../models/storefront");

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