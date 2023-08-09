const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


 
app.listen(3000,()=>{
    console.log('server stated as the port,3000  ')
})
app.get('/',(req,res)=>{
    res.send('hello everyone ')
})
app.post('/api/cars',(request,response)=>{
    const {name, brand} = request.body;
    
    console.log(name);
    console.log(brand );
    response.send("Car Submitted Sucessfully") 
})
 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
     family:4    // online issue solved it ;
})
.then(() => {
    console.log("Connection Successful");
})
.catch((error) => {
    console.error("Received an error:", error);
});

const User = require('./models/user');

x``
const newUser = new User({
    name:'Lavesh Modi ',
    email:'laveshmodiedu@gmail.com',
    password:'password@123'
});
//created
newUser.save()
.then(()=> console.log('User created sucessfully'))
.catch((err)=> console.log('err!'));

//Read
User.find()
.then((users)=> console.log(users))
.catch((err)=> console.log(err));


