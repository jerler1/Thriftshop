require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const path = require("path");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ entended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/thriftshop",
      ttL: process.env.SESSION_MAX_AGE,
    }),
  })
);

app.use(express.static("client/build"));

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

app.use("/api", routes);

if (process.env.PRODUCTION_URL) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
