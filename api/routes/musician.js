var express = require('express');
var router = express.Router();
var Musician = require('../models/musician-model');

/* GET users listing. */
router.get('/:id', function(req, res, next) {  
  Musician.findOne({ _id: req.params.id }, (err, musician) => {
    if (err) {
        return res.status(400).json({ success: false, error: err })
    }

    if (!musician) {
        return res
            .status(404)
            .json({ success: false, error: `Musician not found` })
    }
    return res.status(200).json({ success: true, data: musician })
}).catch(err => console.log(err))
  
});


module.exports = router;
