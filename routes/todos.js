const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoId } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

router.get("/get", (req, res) => {
  res.send("Hello world");
});
router.post("/createTodo", createTodo);

router.get("/getTodo", getTodo);// getting all the data

router.get("/getTodo/:id", getTodoId);//getting bases of the id 

router.put("/updateTodo/:id", updateTodo); // update in the data which we were using 
router.delete("/deleteTodo/:id", deleteTodo);


module.exports = router;
