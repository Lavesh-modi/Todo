const express = require('express');
const app = express();

app.listen(3001,()=>{
    console.log('server stated as the port,3001  ')
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myFirst', {
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
app.get('/',(req,res)=>{
    res.send('hello everyoooone ')
})
//create 

app.post('/')