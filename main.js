const express = require('express');
require('dotenv').config();
const mainRouter = require('./src/app.routes');
const notFoundHandler = require('./src/common/exceptions/not-found.handler');
const allExceptionHandler = require('./src/common/exceptions/all-exception.handler');

function main(){
    const app = express();

    const port = process.env.PORT || 3000;
    require('./src/configs/mongoose.config');

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(mainRouter);
    notFoundHandler(app);
    allExceptionHandler(app);
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main();