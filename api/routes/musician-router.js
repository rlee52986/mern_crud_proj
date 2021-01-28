const express = require('express')

const MusicianCtrl = require('../controllers/musician-ctrl')

const router = express.Router()

router.post('/musician', MusicianCtrl.createMusician)
router.put('/musician/:id', MusicianCtrl.updateMusician)
router.delete('/musician/:id', MusicianCtrl.deleteMusician)
router.get('/musician/:id', MusicianCtrl.getMusicianById)
router.get('/musicians', MusicianCtrl.getMusicians)

module.exports = router