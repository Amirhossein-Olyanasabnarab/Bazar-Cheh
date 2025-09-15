const express = require('express');
require('dotenv').config();
const mainRouter = require('./src/app.routes');
function main(){
    const app = express();

    const port = process.env.PORT || 3000;
    require('./src/configs/mongoose.config');


    app.use(mainRouter);
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main();