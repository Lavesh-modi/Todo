const Todo = require("../models/Todo");


exports.deleteTodo = async(req,res)=>{
    try{
       const {id} = req.params;//id fetching 


       console.log(req.params)
    //    const {title,description} = req.body;//fetching data fromm database 

    //    console.log("shggfhdvfs",req.body)


        await Todo.findByIdAndDelete(id);
        // {_id:id},
        // {title,description,updatedAt:Date.now()},
       
       console.log(id)
       res.json({
        success:true,
        // data:todo,
        message:`deleted Sucessfully `,

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