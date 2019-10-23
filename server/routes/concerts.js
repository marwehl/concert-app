const router = require('express').Router()
const Concert = require('../models/Concert')
const { getSongPreview } = require('../spotify_utils')
const artistPreviews = {}

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

router.post('/', async (req, res) => {
  const artist = req.body.artist
  //let previewUrl = artistPreviews[artist]
  //if (!previewUrl) {
    //const artist_query = artist.replace(' ', '+').toLowerCase()
    //previewUrl = await getSongPreview(artist_query)
   // artistPreviews[artist] = previewUrl
  //}
  const artist_query = artist.replace(" ", "+").toLowerCase();
  const previewUrl = await getSongPreview(artist_query);
  const data = {...req.body, previewUrl}
  Concert.create(data)
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
