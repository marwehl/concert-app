const mongoose = require('mongoose')

const Concert = mongoose.model('Concert', {
  artist: String,
  image: String,
  date: String,
  time: String,
  place: String,
  description: String,
  genres: Array,
  isFavorite: Boolean,
})

module.exports = Concert
