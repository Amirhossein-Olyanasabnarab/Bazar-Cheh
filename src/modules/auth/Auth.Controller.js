const autoBind = require('auto-bind');
const AuthService = require('./Auth.Service');
const AuthMessage = require('./Auth.Message');

class AuthController{
    #service;
    constructor(){
        autoBind(this);
        this.#service = AuthService;
    }

    async sendOtp(req, res, next){
        try {
            const {mobile} = req.body;
            await this.#service.sendOtp(mobile);
            return res.json({
                message: AuthMessage.SendOtpSuccessfully
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController()