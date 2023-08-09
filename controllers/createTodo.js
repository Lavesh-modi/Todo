const Todo = require("../models/Todo")


exports.createTodo = async(req,res)=>{
    try{
        //extract title  and description
        // console.log("createTodo")

        const{title,description} = req.body;

        console.log(req.body)
        const response = await Todo.create({title,description})

        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
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