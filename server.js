const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const { exp } = require('prelude-ls');


const PORT = process.env.PORT || 3001;
const app = express();

// middleware for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);




// Responses that are not valid 
app.use((req, res) => {
    res.status(400).end();
});
// starts the express 
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.')
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
})
});