const Todo = require("../models/Todo");
// const Todo = require("../models/Todo")


exports.getTodo = async(req,res)=>{
    try{
        //fetch data in teh todo
        const todos = await Todo.find({});
        console.log(todos)
        
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entire Todo data is Feteched ',
            }
        )

        
      
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


exports.getTodoId = async(req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})
  

        if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data Found with Given id "
        })
        }
         res.status(200).json({
            success:true,
            data:todo,
            message:`YES ${id} RECIEVE THE DATA OF THE ID `,
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