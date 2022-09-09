const Registration = require("../MongoDb/models/Register");

var jwt = require("jsonwebtoken");
const { ObjectId } = require("mongoose").Types;

//require("../MongoDb/models/Register");

const bcrypt = require("bcrypt");
const { mongo } = require("mongoose");
const { author, books } = require("../MongoDb/models/Author");

exports.AuthRegistration = async (req, res) => {
  console.log("registration");
  try {
    const { email } = req.body;
    const userEmail = await Registration.findOne({ email: email });
    if (userEmail) {
      res.status(400).json({ message: "Email is already present.." });
    }

    // return Registration.updateOne({resetLink:tokken},function(err,sucess){
    //   if(err){
    //     return res.status(400).json({error:"rest assword lik error"})
    //   }else{
    //     res.status(200).json({message:data})
    //   }
    // })

    const password = req.body.password;
    const Confirmpassword = req.body.confirmpassword;

    if (password === Confirmpassword) {
      const passwordHash = await bcrypt.hash(password, 10);
      const Register = await new Registration({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: passwordHash,
      });
      console.log(Register);

      const save = await Register.save();
      if (save) {
        res.status(201).json({ message: "data save successfully..." });
      }
    } else {
      console.log("password incorrect..");
    }
  } catch (errr) {
    console.log(errr);
  }
};

/////////////////////////////--------------------------------------------------------------------------------------------------------////////////////////

exports.AuthLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next("password and email both are required...");
  }

  try {
    const user = await Registration.findOne({ email: req.body.email });

    if (!user) return res.status(400).json({ error: "Email is not match...." });

    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(comparePassword);

    if (!comparePassword) {
      return res.status(400).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    //signing token with user id
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.API_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // save the user token

    user.token = token;

    //responding request with user profile success message and  access token .
    res.status(200).send({
      user: {
        id: user._id,
        email: user.email,
        firstname: user.firstname,
      },
      message: "Login successfull",
      accessToken: token,
    });

    // return res.status(200).json({message:"Login sucessfully"});
  } catch (err) {
    console.log(err);
    alert(err.message);
    return next("error : ", err);
  }
};
////////////------------------------------------------------------------------------------////////////////////////////////////////////////

exports.Dashboard = async (req, res) => {
  res.send("dashboard");
};

///--------------------------------------------------------------------------------------------------------------------------------------///////////////////////

