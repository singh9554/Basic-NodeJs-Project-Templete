const express = require('express');

const app = express();
const apiRoutes = require('./routes')
const {SERVER_CONFIG} = require('./config');

app.use('/api', apiRoutes);

app.listen(SERVER_CONFIG.PORT,()=>{
    console.log(`Server is running successfully at the port number ${SERVER_CONFIG.PORT}`);
})