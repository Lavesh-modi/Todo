const mongoose = require("mongoose");

require("dotenv").config();

const   dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4, // online issue solved it ;
    })
    .then(() => {
      console.log("DB Connection Suceesful ");
    })
    .catch((error) => {
      console.log("Issue in the Db Connection");
      console.error(error.message);
      process.exit(1);
    });
};
module.exports = dbConnect;
