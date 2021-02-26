const mongoose = require("mongoose");
const Storefront = require("../models/storefront");
const Employee = require("../models/employee");
const Inventory = require("../models/inventory");
const Invoice = require("../models/invoice");

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

const storeId = new mongoose.Types.ObjectId();
const employeeSeeds = [
  {
    _id: new mongoose.Types.ObjectId(),
    firstname: "Nathan",
    lastname: "Castaldi",
    email: "nathan@ourstore.com",
    storefront: storeId,
    isAdmin: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    firstname: "Seraphina",
    lastname: "Castaldi",
    email: "seraphina@ourstore.com",
    storefront: storeId,
    isAdmin: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    firstname: "Bradley",
    lastname: "Donahue",
    email: "b@e",
    storefront: storeId,
    isAdmin: true,
  },
];

const inventorySeeds = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Oak Dresser",
    description: "Finely made dresser",
    category: "Furniture",
    price: "54.89",
    condition: "Good",
    image: "source_url",
    status: "Sold",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "The Starry Night",
    description: "Painting by Vincent van Gogh",
    category: "Art",
    price: "884.67",
    condition: "Excellent",
    image: "source_url",
    status: "Available",
    storefront: storeId,
  },
];

const invoiceSeeds = [
  {
    _id: new mongoose.Types.ObjectId(),
    storeID: storeId,
    customerName: "John Doe",
    customerEmail: "john.doe@gmail.com",
    purchasedItems: [inventorySeeds[0]._id],
    status: "Paid",
  },
];

const storefrontSeeds = [
  {
    _id: storeId,
    name: "Nathan's Thrift Shop",
    owner: "Nathan Castaldi",
    address1: "123 Main St",
    address2: "",
    city: "Atlanta",
    state: "GA",
    zip: "30319",
    phone: "888-888-8888",
    employees: employeeSeeds.map((e) => e._id),
    items: inventorySeeds.map((inv) => inv._id),
    invoices: invoiceSeeds.map((invo) => invo._id),
  },
];

Employee.deleteMany({})
  .then(() => Employee.collection.insertMany(employeeSeeds))
  .then((employeeData) => {
    Storefront.deleteMany({}).then(() => {
      Storefront.collection
        .insertMany(storefrontSeeds)
        .then((storeData) => {
          Invoice.deleteMany({})
            .then(() => Invoice.collection.insertMany(invoiceSeeds))
            .then((invoiceData) => {
              Inventory.deleteMany({})
                .then(() => Inventory.collection.insertMany(inventorySeeds))
                .then((inventoryData) => {
                  // console.log(data.result.n + " records inserted!");
                  process.exit();
                })
                .catch((err) => {
                  console.error(err);
                  process.exit(1);
                });
            })
            .catch((err) => {
              console.error(err);
              process.exit(1);
            });
        })
        .catch((err) => {
          console.error(err);
          process.exit(1);
        });
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
