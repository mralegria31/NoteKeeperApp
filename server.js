// Necessary items of interest :) 
const express = require('express');
const { appendFile } = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/noteRoutes');
const htmlRoutes = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Set up the port to listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});