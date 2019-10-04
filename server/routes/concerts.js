const router = require('express').Router()
const Concert = require('../models/Concert')

router.get('/', (req, res) => {
  Concert.find()
    .then(concerts => res.json(concerts))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Concert.find({id: req.params.id })
    .then(concerts => res.json(concerts))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Concert.create(req.body)
    .then(concert => res.json(concert))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Concert.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(concert => res.json(concert))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Concert.findByIdAndDelete(req.params.id)
    .then(concert => res.json(concert))
    .catch(err => res.json(err))
})

module.exports = router
