const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'Get all workouts' })
})

// GET a single workout
router.get('/:id', (res, req) => {
    res.json({ mssg: 'GET a single workout' })
})

// POST a new workout
router.post('/', (res, req) => {
    res.json({ mssg: 'POST a new workout' })
})

// DELETE a workout
router.delete('/:id', (res, req) => {
    res.json({ mssg: 'DELETE a workout' })
})

// UPDATE a workout
router.patch('/:id', (res, req) => {
    res.json({ mssg: 'UPDATE a workout' })
})

module.exports = router