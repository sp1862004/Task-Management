const bcrypt=require("bcryptjs")
exports.hash = async (inputpass) =>{
 let salu= bcrypt.genSalt(10);
 return await bcrypt.hash(inputpass,salu);
}  