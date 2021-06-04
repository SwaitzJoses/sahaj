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
      type: String,
    },
    count: {
      type: String,
      default: 0,
    },

    last_deposit: {
        type: String,
        default: 1
      },
  },




  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
