const autoBind = require('auto-bind');
const UserModel = require('../user/user.model');
const {randomInt} = require('crypto');
const createHttpError = require('http-errors');
const AuthMessage = require('./Auth.Message');
class AuthService {
    #model;
    constructor() {
        autoBind(this);
        this.#model = UserModel;
    }

    async sendOtp(mobile){
        const user = await UserModel.findOne({mobile});
        const now = new Date().getTime();
        const otp = {
            code: randomInt(10000, 99999),
            expiresIn: now + (1000 * 60 * 2)
        };
        if (!user) {
            const newUser = await this.#model.create({mobile, otp});
            return newUser;
        }
        if (user.otp && user.otp.expiresIn > now){
            throw new createHttpError(400 ,AuthMessage.OtpCodeNotExpired);
        }
        user.otp = otp;
        await user.save();
        return user;
    }
}

module.exports = new AuthService();