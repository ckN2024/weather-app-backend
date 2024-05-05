import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "_id field is required"]
    },

    profilePicture: {
      type: String,
      trim: true
    },

    userName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },

    firstName: {
      type: String,
      required: [true, "Firstname is required"],
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      trim:true
    },

    mobileNumber: {
      type: String,
      maxlength: [10, "Mobile number must be 10 digits"],
      minLength: [10, "Mobile number must be 10 digits"]
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationCode: String,

    verificationCodeGenerationTime: Date,

    favouritePlaces: {
        type: [String]
    },

    isNotificationOn: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema)

export default User;
