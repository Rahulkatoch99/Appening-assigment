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

exports.Author = async (req, res) => {
  try {
    const { name, age, dob } = req.body;

    const AddAuthor = new author({
      name: name,
      age: age,
      dob: dob,
    });
    const save = await AddAuthor.save();
    if (save) {
      return res.status(200).json({ message: "Data save successfully..." });
    }
    console.log(save);
  } catch (err) {
    console.log(err);
  }
};

//////////////---------------------------------------------------------------------------------------------------------------------------//////////////////////

exports.Books = async (req, res) => {
  try {
    const { name, publish, price, user_id } = req.body;
    const AddBook = new books({
      user_id: user_id,
      name: name,
      publish: publish,
      price: price,
    });

    const save = await AddBook.save();
    const user = await author.findOne({ user_id });

    console.log("save wala data", save);

    console.log("id", user);

    user.Books.push(save);
    const d = await user.save();
    console.log(d);

    const add = await author
      .findOne({ user: user_id })
      .populate("Books")
      .exec(); // key to populate

    console.log("Add wala data", add);

    if (add) {
      return res.status(200).json({ message: add });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.Delete = async (req, res, next) => {
  const { user_id } = req.body;
  try {
    const del = await author.findOneAndDelete({ user: user_id });
    res.status(200).json({ message: `dlete sucessfully ${del}` });
    console.log(del);
  } catch (err) {
    console.log(err);
  }
};
