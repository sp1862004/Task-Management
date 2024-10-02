const jwt = require("jsonwebtoken")
// const User = require("../model/UserSchema")
exports.authenticate = async (req, res, next) => {
    
    let token = req.headers.authorization;


    console.log("token............");
    console.log(req.headers)
    
    if (!token) {
        return res.status(401).send({
            error: "Access Denied / Unauthorized request"
        })
    }
    try {
        token = token.split(' ')[1];
        if (token === 'null' || !token) {
            return res.status(401).send({
                error: 'Unauthorized request'
            });
        }
        // let verifiedUser = jwt.verify(token, 'secretKey');
        let verifiedUser = jwt.verify(token, 'itsarthi');
        if (!verifiedUser) return res.status(401).send({
            error: 'Unauthorized request'
        })
        // const rootUser=await User.findOne({_id:verifiedUser._id,token})
        // req.rootUser=rootUser;
        req.user = verifiedUser; 
        next();

    } catch (err) {
        console.log(err)
        res.status(400).json({
            error: true,
            message: "Invalid Token"
        })
    }

}