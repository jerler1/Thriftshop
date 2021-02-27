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
    password: "test",
    storefront: storeId,
    isAdmin: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    firstname: "Seraphina",
    lastname: "Castaldi",
    email: "seraphina@ourstore.com",
    password: "test",
    storefront: storeId,
    isAdmin: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    firstname: "Bradley",
    lastname: "Donahue",
    email: "b@e",
    password: "test",
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
    image: "https://productimages.mybobs.com/20037818002/20037818002_gallery_01_wide.jpg",
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
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71%2BYuU3K3JL._AC_SX466_.jpg",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "The Coolest Red Shirt",
    description: "A red shirt with only some holes",
    category: "Clothing",
    price: "10",
    condition: "Near Mint",
    image:
      "https://www.joinusonline.net/pub/media/catalog/product/t/s/tshirt_old_red.jpg",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Titanic VHS",
    description: "2-tape vhs of the smash hit Titanic",
    category: "Entertainment",
    price: "5",
    condition: "Poor",
    image: "https://i.ebayimg.com/images/g/1JoAAOSwNDJafOQc/s-l1600.jpg",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Kitchen-aid Mixer",
    description: "Cool blue Kitchen-aid mixer with a slightly cracked bowl",
    category: "Kitchen",
    price: "50",
    condition: "Good",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchenaid-wayfair-1539012314.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Desktop Speakers",
    description: "Pair of black Logitech speakers",
    category: "Electronics",
    price: "8",
    condition: "Excellent",
    image:
      "https://www.themasterswitch.com/sites/default/files/Roundup%20Images/Computer%20Speakers/July%2019%20Update/Logitech-Speakers.jpg",
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
  .then(() => Employee.insertMany(employeeSeeds))
  .then((employeeData) => {
    Storefront.deleteMany({}).then(() => {
      Storefront.insertMany(storefrontSeeds)
        .then((storeData) => {
          Invoice.deleteMany({})
            .then(() => Invoice.insertMany(invoiceSeeds))
            .then((invoiceData) => {
              Inventory.deleteMany({})
                .then(() => Inventory.insertMany(inventorySeeds))
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
