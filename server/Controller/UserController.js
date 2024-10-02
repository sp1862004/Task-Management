const { hash } = require("../helper/hashpass");
const User = require("../model/UserModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.create = async (req, res) => {
    try {


        const { name, email, password } = req.body;
        console.log(req.body);
        const isemail = await User.findOne({ email: email });
        if (isemail) {
            res.json({
                success: false,
                message: "Email Already Exists..please login now"
            })
        }
        const h = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: h
        });
        if (user) {
            res.json({
                success: true,
                message: "User registration succesfully..."
            })
        }
        else {
            res.json({
                success: false,
                Error
            })
        }
    } catch (error) {
        console.log(error);

    }

}
exports.get = async (req, res) => {
    const user = await User.find()
    if (user) {
        res.json({
            user: user
        })
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isemail = await User.findOne({ email: email });
        if (!isemail) {
            res.json({
                success: false,
                message: "User Email not Register"
            })
        }
        const ispassword = await bcrypt.compare(password, isemail.password)
        if (!ispassword) {
            res.json({
                success: false,
                message: "Invalid Credential"
            })
        }
        const token = jwt.sign({
            userid: isemail._id,
            userrole: isemail.role_id
        },
            "itsarthi",
            { expiresIn: "1h" }
        )
        res.header("auth-token", token).json({
            token: token,
            success: true,
            message: "User login successful",
        });
    } catch (error) {
        console.log(error);

    }
}