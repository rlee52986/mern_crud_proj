const Musician = require('../models/musician-model')

createMusician = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a musician',
        })
    }

    const musician = new Musician(body)

    if (!musician) {
        return res.status(400).json({ success: false, error: err })
    }

    musician
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: musician._id,
                message: 'Musician created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Musician not created!',
            })
        })
}

updateMusician = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Musician.findOne({ _id: req.params.id }, (err, musician) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Musician not found!',
            })
        }
        musician.name = body.name
        musician.time = body.time
        musician.rating = body.rating
        musician
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: musician._id,
                    message: 'Musician updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Musician not updated!',
                })
            })
    })
}

deleteMusician = async (req, res) => {
    await Musician.findOneAndDelete({ _id: req.params.id }, (err, musician) => {
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
}

getMusicianById = async (req, res) => {
    await Musician.findOne({ _id: req.params.id }, (err, musician) => {
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
}

getMusicians = async (req, res) => {
    await Musician.find({}, (err, musicians) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!musician.length) {
            return res
                .status(404)
                .json({ success: false, error: `Musician not found` })
        }
        return res.status(200).json({ success: true, data: musicians })
    }).catch(err => console.log(err))
}

module.exports = {
    createMusician,
    updateMusician,
    deleteMusician,
    getMusicians,
    getMusicianById,
}