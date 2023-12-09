const express = require('express');

// Creating express application
const app = express();

// Creating Port Number
const port = 4000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});