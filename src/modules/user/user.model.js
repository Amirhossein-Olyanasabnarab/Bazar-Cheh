const {Schema} = require('mongoose');
const mongoose = require("mongoose");

const OtpSchema = new Schema({
   code: {type: String, required: false, default: undefined},
   expireIn: {type: Number, required: false, default: 0},
});


const UserSchema = new Schema({
    fullName: {type: String, required: false},
    mobile: {type: String, required: true, unique: true},
    otp: {type: OtpSchema},
    verifiedMobile: {type: Boolean, default: false, required: true},
}, {timestamps: true});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;