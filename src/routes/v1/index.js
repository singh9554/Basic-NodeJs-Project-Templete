const express = require('express');

const router = express.Router();

router.get('/home', (req, res) =>{
    try {
        res.status(200).json({"message": "The API is Stable"});
    } catch (error) {
        
    }
})
module.exports = router;