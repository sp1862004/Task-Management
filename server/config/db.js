const { default: mongoose } = require("mongoose");

const db=mongoose.connect(`mongodb+srv://sp1862004:ZUz3m1PkWKRFO7HV@shaileshpatel.oohgs.mongodb.net/TakeM`).then(()=>{
    console.log("database connect👍");
    
})
.catch((err)=>{
    console.log("dataabase error😫😫");
    
})
module.exports=db