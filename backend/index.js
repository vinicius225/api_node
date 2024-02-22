require("dotenv").config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
// routes
const routes = require('./routers/Router');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));
app.use('uploads', express.static(path.join(__dirname,'/uploads/')));
app.use(routes);

require('./config/db.js')

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/`);
});
