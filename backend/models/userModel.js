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
      default:"Account Number"
    },
    amount: {
      type: String,
      // required:true,
      default: 0,
    },

    withdraw_date: {
      type: String,
    },
    withdraw_count: {
      type: String,
      default: 0,
    },

    last_withdraw: {
        type: String,
        default: 1
      },
      deposit_date: {
        type: String,
      },
      deposit_count: {
        type: String,
        default: 0,
      },
  
      last_deposit: {
          type: String,
          default: 1
        },

      //  number: {
      //     type:  mongoose.Schema.Types.ObjectId,
          
      //   },
  },




  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
