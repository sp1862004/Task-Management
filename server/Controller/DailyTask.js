const Task = require("../model/DailyTask");

exports.dailycreate= async(req,res)=>{
    try {
        console.log(req.body);
        const {Task_date,Task_desc,Task_hour,Task_status}=req.body;
        
        const parsedDate = new Date(Task_date);
        const task=await Task.create({
            Task_date:parsedDate,
            Task_desc,
            Task_hour,
            Task_status
        })
        if(task){
            res.json({
                success:true,
                message:"Task Submited Succssfully check the status...."
            })
        }
    } catch (error) {
        console.log(error);
        
    }

}
exports.getdaily =async (req,res)=>{
    const user=await Task.find();
    if(user){
        res.json({
            success:true,
            user:user
        })
    }
}
exports.deletetask = async(req,res)=>{
    const user=await Task.findByIdAndDelete(req.params.id)
    if(user){
        res.json({
            success:true,
            message:"data are deleted"
        })
    }
}
exports.singletask =async(req,res)=>{
    const id=req.params.id;
    const user=await Task.findById(id)
    if(user){
        res.json({
            success:true,
            user
        })
    }
}
exports.update=async (req,res)=>{
    try{
        const id=req.params.id;
        const bmd=await Task.findByIdAndUpdate(
            {_id:id},
            {
                Task_date:req.body.Task_date,
                Task_desc:req.body.Task_desc,
                Task_hour:req.body.Task_hour,
                Task_status:req.body.Task_status,
            }
        )
        if(bmd){
            res.json({success:true,message:"data has been update"})
        }
        else{
            res.json({success:false,message:"data not updated"})
        }
    }
    catch(err){
        console.log(err);
    }
}