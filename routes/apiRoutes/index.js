// required items
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

// use noteRoutes.js
router.use(noteRoutes);

//export information
module.exports = router;