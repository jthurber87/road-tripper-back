const express = require('express')
const router = express.Router()
const Trip = require('../models/trip.js')


router.get('/', async (req, res) => {
  try {
    const foundTrips = await Trip.find();
    res.status(200).json(foundTrips)
  } catch(err){
    res.status(400).json({ error: err.message })
  }
})


router.get('/:id', async (req, res) => {
  try {
    const foundTrips = await Trip.findById(req.params.id);
    res.status(200).json(foundTrips)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})



router.post('/', async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(200).json(newTrip)
  } catch(err) {
    res.status(400).json({
      error: err.message
    })
  }
})


router.delete('/:id', async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTrip)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTrip)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
