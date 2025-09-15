const {Router} = require('express');
const {AuthRouter} = require('./modules/auth/Auth.Routes');


const mainRoutes = Router();

mainRoutes.use("/auth", AuthRouter);

module.exports = mainRoutes;