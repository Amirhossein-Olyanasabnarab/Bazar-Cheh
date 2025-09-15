const router = require('express').Router();
const AuthController = require('./Auth.Controller');

router.post('/send-otp', AuthController.sendOtp);

module.exports = {
    AuthRouter : router
}