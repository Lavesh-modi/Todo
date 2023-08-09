const Todo = require("../models/Todo");


exports.updateTodo = async(req,res)=>{
    try{
       const {id} = req.params;//id fetching 


       console.log(req.params)
       const {title,description} = req.body;//fetching data fromm database 

       console.log("shggfhdvfs",req.body)


       const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt:Date.now()},
       )
       console.log(id)
       res.status(200).json({
        success:true,
        data:todo,
        message:`Update Sucessfully `,

     })


        
      
    }
catch(err){

    console.error(err),
    console.log(err),
    res.status(500)
    .json({
        success:false,
        data:"internal server error ",
        message:err.message,
})

}
}