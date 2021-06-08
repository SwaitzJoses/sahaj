import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
// import generateToken from "../utils/generateToken.js";

// description:  withdraw
// route : PUT/api/user/withdraw
// access: Public
const withdraw = asyncHandler(async (req, res) => {
  const { _id, withdraw } = req.body;

  const user = await User.findOne({ _id });

  user.withdraw_date = new Intl.DateTimeFormat("en-US").format(new Date());
  if (user && withdraw >= 1000 && withdraw <= 25000) {
    if (user.withdraw_count < 3 && user.withdraw_date !== user.last_withdraw) {
      user.amount = parseInt(user.amount) - parseInt(withdraw);
      user.withdraw_count++;
      await user.save();
    } else if (
      user.withdraw_count === "0" &&
      user.withdraw_date === user.last_withdraw
    ) {
      res.status(400).json({ message: "only three transaction for a day" });
    } else if (user.withdraw_count >= 3) {
      user.last_withdraw = new Intl.DateTimeFormat("en-US").format(new Date());
      res.status(400).json({ message: "only three transaction for a day" });
      user.withdraw_count = 0;
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
      "Invalid account or Invalid amount to withdraw. (min 1000 : max 25000)"
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
  const { _id, deposit } = req.body;

  const user = await User.findOne({ _id });

  user.deposit_date = new Intl.DateTimeFormat("en-US").format(new Date());
  
  if (user && deposit >= 500 && deposit <= 50000) {
    if (user.deposit_count < 3 && user.deposit_date !== user.last_deposit) {
      user.amount = parseInt(user.amount) + parseInt(deposit);
      user.deposit_count++;
      await user.save();
    } else if (
      user.deposit_count === "0" &&
      user.deposit_date === user.last_deposit
    ) {
      res.status(400).json({ message: "only three transaction for a day" });
    } else if (user.deposit_count >= 3) {
      user.last_deposit = new Intl.DateTimeFormat("en-US").format(new Date());
      res.status(400).json({ message: "only three transaction for a day" });
      user.deposit_count = 0;
      await user.save();
    }
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
      "Invalid account or Invalid amount to deposit. (min 500 : max 50000)"
    );}
    // res.json({

    //   error,

    // });
  
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const number = (Math.floor(Math.random() * 9999) + 1000 ).toString();
  
  const date = new Date();
  // const last_deposit = new Date
  const user = await User.create({
    name,
    number,
    date,
    // last_deposit
  });

  // const number = user._id;
  // number = number.toString()
  //  user = await User.create({number})
  
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      number: user.number,
      amount: user.amount,
      deposit_date: user.deposit_date,
      withdraw_date: user.withdraw_date,
      deposit_count: user.deposit_count,
      withdraw_count: user.withdraw_count,
      last_deposit: user.last_deposit,
      last_withdraw: user.last_withdraw,
      
    });
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});

// description:  balance
// route : GET/api/user/balance
// access: Public

const balance = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  
  console.log(req.body)
  const user = await User.findOne({ _id });
  console.log(user)
  if (user) {
    res.status(200).json
    ( user
      // {
      // _id: user._id,
      // name: user.name,
      // number: user.number,
      // amount: user.amount,
      // deposit_date: user.deposit_date,
      // withdraw_date: user.withdraw_date,
      // deposit_count: user.deposit_count,
      // withdraw_count: user.withdraw_count,
      // last_deposit: user.last_deposit,
      // last_withdraw: user.last_withdraw,
    // }
    );
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});

// description:  transfer
// route : PUT/api/user/transfer
// access: Public
const transfer = asyncHandler(async (req, res) => {
  const { number1, number2, transfer } = req.body;

  const sender = await User.findOne({ _id: number1 });

  const receiver = await User.findOne({ _id: number2 });

  if (sender && transfer >= 1000 && transfer <= 25000) {
    if (sender.withdraw_count < 3 && sender.withdraw_date !== sender.last_withdraw) {
      sender.withdraw_date = new Intl.DateTimeFormat("en-US").format(new Date());

  sender.amount = parseInt(sender.amount) - parseInt(transfer);
  sender.withdraw_count++;
  await sender.save();
  // await user.save();
  receiver.amount = parseInt(receiver.amount) + parseInt(transfer);
  //  await user.save();
  
  await receiver.save();


} else if (
  sender.withdraw_count === "0" &&
  sender.withdraw_date === sender.last_withdraw
) {
  res.status(400).json({ message: "only three transaction for a day" });
} else if (sender.withdraw_count >= 3) {
  sender.last_withdraw = new Intl.DateTimeFormat("en-US").format(new Date());
  res.status(400).json({ message: "only three transaction for a day" });
  sender.withdraw_count = 0;
  await sender.save();
}

  res.json({
    // number: sender.number,
    // number: receiver.number
    sender: sender.amount,
    receiver: receiver.amount,
    // amount:sender.amount,
    // amount:receiver.amount,
  });
}
});

export { deposit, withdraw, registerUser, transfer, balance };
