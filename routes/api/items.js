const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Items');

// @route GET api/items
// @desc Get All Items
// @access Public 
// just the / because it is defined in the server.js to always go to
// ... app.use('/api/items', items)
router.get('/', (req, res) =>{
    Item.find()
    .sort({date:-1})
    .then(items => res.jason(items))
});



module.exports = router;