const express = require('express');
require('dotenv').config();

function main(){
    const app = express();

    const port = process.env.PORT || 3000;
    require('./src/configs/mongoose.config');

    app.listen(port, () => {
        console.log(`Server is running on http://localhost${port}`);
    });
}

main();