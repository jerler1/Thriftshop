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
    image:
      "https://productimages.mybobs.com/20037818002/20037818002_gallery_01_wide.jpg",
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
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Vintage High Chair",
    description: "An old high chair but still sturdy!",
    category: "Furniture",
    price: "15",
    condition: "Good",
    image: "/item-images/1.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Beatles Compilation",
    description: "2 double-disc CDs of the Beatles biggest hits! ",
    category: "Entertainment",
    price: "5",
    condition: "Acceptable",
    image: "/item-images/2.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Amazon Echo",
    description: "Echo Assistant smart speaker still sealed!",
    category: "Electronics",
    price: "25",
    condition: "Brand New",
    image: "/item-images/3.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Misfits T-shirt",
    description: "XXL Women's Black t-shirt for the band 'Misfits'",
    category: "Clothing",
    price: "18",
    condition: "Acceptable",
    image: "/item-images/4.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "TI-82 Calculator",
    description: "Black TI-82 graphing calculator with case!",
    category: "Electronics",
    price: "32",
    condition: "Very Good",
    image: "/item-images/5.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Monopoly",
    description: "Everybody's favorite calm and relaxing game, Monopoly!",
    category: "Games/Toys",
    price: "5",
    condition: "Acceptable",
    image: "/item-images/6.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Old Macintosh",
    description: "A classic Apple Mac computer from the early 90s!",
    category: "Electronics",
    price: "40",
    condition: "Not Functioning/Just for Parts",
    image: "/item-images/7.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Painting of Dog",
    description:
      "A small painting of a cute dog in what seems to be a hand-made frame!",
    category: "Art",
    price: "12",
    condition: "Very Good",
    image: "/item-images/8.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "White Sneakers",
    description: "Mens size 9 tennis shoes from Kenneth Cole",
    category: "Clothing",
    price: "23",
    condition: "Good",
    image: "/item-images/9.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Clueless VHS",
    description: "A VHS tape of the film Clueless",
    category: "Entertainment",
    price: "4",
    condition: "Acceptable",
    image: "/item-images/10.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Yamaha Receiver",
    description: "Yamaha audio receiver rx-v563",
    category: "Electronics",
    price: "26",
    condition: "Very Good",
    image: "/item-images/11.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Cornholio T-Shirt",
    description: "Beavis & Butthead Cornholio shirt, size Men's large",
    category: "Clothing",
    price: "10",
    condition: "Very Good",
    image: "/item-images/12.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Cast Iron Pan",
    description: "Slightly rusted Lodge cast iron skillet!",
    category: "Kitchenware",
    price: "16",
    condition: "Acceptable",
    image: "/item-images/13.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "R2 D2 Measuring Cups",
    description: "Measuring cups made out of Star Wars' R2-D2!",
    category: "Kitchenware",
    price: "12",
    condition: "Like New",
    image: "/item-images/14.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Theater Style Chairs",
    description:
      "Orange and black chairs straight out of an old movie theater!",
    category: "Furniture",
    price: "85",
    condition: "Very Good",
    image: "/item-images/15.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Elvis Poster",
    description: "A screen printed painting of Elvis Presley",
    category: "Art",
    price: "24",
    condition: "Good",
    image: "/item-images/16.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Stuffed Pokemon",
    description: "Stuffed toy of the Pokemon Charmander with tag!",
    category: "Games/Toys",
    price: "13",
    condition: "Like New",
    image: "/item-images/17.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Lord Of The Rings Box Set",
    description:
      "DVD Box set with the extended editions of The Lord of the Rings trilogy",
    category: "Entertainment",
    price: "35",
    condition: "Very Good",
    image: "/item-images/18.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Orange Dutch Oven",
    description: "Orange cast iron dutch oven made by Le Creuset",
    category: "Kitchenware",
    price: "53",
    condition: "Good",
    image: "/item-images/19.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Portable Electric Screwdriver",
    description: "Black & Decker chargeable screwdriver! No charger.",
    category: "Tools/Appliances",
    price: "32",
    condition: "Acceptable",
    image: "/item-images/20.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Brass Lamp",
    description: "Old brass lamp! No lampshade or lightbulbs included.",
    category: "Furniture",
    price: "25",
    condition: "Good",
    image: "/item-images/21.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Purple Converse",
    description: "Women's size 7 purple converse all-stars with low tops.",
    category: "Clothing",
    price: "28",
    condition: "Very Good",
    image: "/item-images/22.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Star Trek Novels",
    description: "A collection of many different Star Trek novels!",
    category: "Entertainment",
    price: "10",
    condition: "Good",
    image: "/item-images/23.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "M.C. Escher - Staircases",
    description: "Framed print of M.C. Escher's Staircases!",
    category: "Art",
    price: "26",
    condition: "Acceptable",
    image: "/item-images/24.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Wood and Glass Coffee Table",
    description: "Large heavy coffee table with a glass centerpiece!",
    category: "Furniture",
    price: "68",
    condition: "Good",
    image: "/item-images/25.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Cabbage Patch Dolls",
    description:
      "Terrifying collection of cabbage patch kids, no guarantee they're not haunted. Please buy.",
    category: "Games/Toys",
    price: "2",
    condition: "Good",
    image: "/item-images/26.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Stepladder",
    description: "Old metal frame folding stepladder with wooden steps",
    category: "Tools/Appliances",
    price: "20",
    condition: "Acceptable",
    image: "/item-images/27.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Super 8 Camera",
    description: "Vintage Argus Showmaster Super 8 camera!",
    category: "Electronics",
    price: "53",
    condition: "Not Functioning/Just for Parts",
    image: "/item-images/28.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Old Sofa W/ Table Wings",
    description:
      "An old orange-spackled couch that has two side tables attached.",
    category: "Furniture",
    price: "185",
    condition: "Very Good",
    image: "/item-images/29.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Lost Boys DVD",
    description: "DVD of the 80s horror film, The Lost Boys",
    category: "Entertainment",
    price: "6",
    condition: "Like New",
    image: "/item-images/30.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Game of Life",
    description: "Old Game of Life board game with most of the pieces!",
    category: "Games/Toys",
    price: "8",
    condition: "Acceptable",
    image: "/item-images/31.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "NFL Bomber Jacket",
    description: "Vintage Chicago Bears bomber jacket, men's size Large",
    category: "Clothing",
    price: "42",
    condition: "Very Good",
    image: "/item-images/32.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Teal Lounge Chair",
    description:
      "Retro style lounge with a blue-green cover, metal and wood frame.",
    category: "Furniture",
    price: "175",
    condition: "Good",
    image: "/item-images/33.png",
    status: "Available",
    storefront: storeId,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Handheld Digital Camera",
    description: "Old school Olympus hand-held digital camera!",
    category: "Electronics",
    price: "22",
    condition: "Good",
    image: "/item-images/34.png",
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
