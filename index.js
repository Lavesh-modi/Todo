
// instance has been created and express of the server 

const express = require("express");
const app = express();

//  in env file i have port and database link 
// in process.env.PORT has give port otherwise 5000

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// parsing 

app.use(express.json());
//defining the routes 

const todoRoutes = require("./routes/todos");



// listen in the port in which were we port 

app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

// connecting to the dbConnect were we can do that in which condition of then and catch 

const dbConnect = require("./config/database");
dbConnect();





//get api of home in which were we can print it on screen 

app.get("/", (req, res) => {
  res.send("<h1>This is THE HOmepage</h1>");
});

//api on the post man and todoRoutes in which the route to the createroute 
app.use("/api/v1/", todoRoutes);
