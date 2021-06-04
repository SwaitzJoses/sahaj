import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
// import generateToken from "../utils/generateToken.js";

// description:  withdraw
// route : PUT/api/user/withdraw
// access: Public
const withdraw = asyncHandler(async (req, res) => {
  const { number, withdraw } = req.body;

  const user = await User.findOne({ number });

  let date = user.date;
  if (user && withdraw >= 1000 && withdraw <= 25000) {
    if (user.count < 3 && user.date != user.last_deposit) {
      user.amount = parseInt(user.amount) - parseInt(withdraw);
      user.count++;
      await user.save();
    } else if (user.count >= 3) {
      user.last_deposit = date;
      res.status(400).send("only three transaction for a day");
      user.count = 0;
      await user.save();
    }
    if (user.amount > 0) {
      
      await user.save();
      res.json({
        amount: user.amount,
      });
    } else {
      res.status(401); // unauthorized
      throw new Error("Less than 0 ");
    }
  } else {
    res.status(401); // unauthorized
    throw new Error(
      "Invalid account or Invalid amount to deposit. (min 500 : max 25000)"
    );
    // res.json({

    //   error,

    // });
  }
});

// description:  deposit
// route : PUT/api/user/deposit
// access: Public
const deposit = asyncHandler(async (req, res) => {
  const { number, deposit } = req.body;

  const user = await User.findOne({ number });

  if (user && deposit >= 500 && deposit <= 50000) {
    user.amount = parseInt(user.amount) + parseInt(deposit);
    if (user.amount <= 100000) {
      await user.save();
      res.json({
        amount: user.amount,
      });
    } else {
      res.status(401); // unauthorized
      throw new Error("Exceeded 100000");
    }
  } else {
    res.status(401); // unauthorized
    throw new Error(
      "Invalid account or Invalid amount to deposit. (min 500 : max 25000)"
    );
    // res.json({

    //   error,

    // });
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const number = (Math.floor(Math.random() * 9999) + 1000).toString();
  const date = new Date();
  // const last_deposit = new Date
  const user = await User.create({
    name,
    number,
    date,
    // last_deposit
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      number: user.number,
      amount: user.amount,
      date: user.date,
      count: user.count,
      last_deposit: user.last_deposit,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});

// description:  Get user profile
// route : Get/api/user/profile
// access: Private
const getUserProfile = asyncHandler(async (req, res) => {
  //   res.send("SUCCESS");

  console.log(`hi ${req.user._id}`); // because its already signed im (private)
  const user = await User.findById(req.user._id); // see -------------------------->  we put id here in controller instead of action
  // console.log(user)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// description:  Update user profile
// route : Put/api/user/profile
// access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// description: Get all users
// route : Get/api/users
//Private

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});

  if (user) {
    res.json({
      user,
    });
  } else {
    res.status(404);
    throw new Error("Users not found");
  }
});

// @desc    delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  deposit,
  withdraw,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
