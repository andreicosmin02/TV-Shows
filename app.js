const express = require('express');
const app = express();

port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
