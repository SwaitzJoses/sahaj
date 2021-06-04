import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    number: {
      type: String,
      // required:true
      // unique:true
    },
    amount: {
      type: String,
      // required:true,
      default: 0,
    },

    date: {
      type: Date,
    },
    count: {
      type: String,
      default: 0,
    },

    last_deposit: {
        type: Date,
        default: 1
      },
  },




  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
