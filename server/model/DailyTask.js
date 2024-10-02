const { model, Schema } = require("mongoose");
const { schema } = require("./UserModel");

const DailyTask= new Schema({
    Task_date:{
         type:Date,
         required:true,
    },
    Task_desc:{
        type:String,
        required:true
    },
    Task_hour:{
        type:String,
        required:true
    },
    Task_status:{
        type:String,
        required:false
    }


},
{timestamps:true}
)
const Task= model("Task",DailyTask);
module.exports=Task;