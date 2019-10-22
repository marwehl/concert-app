const mongoose = require('mongoose')

const Concert = mongoose.model('Concert', {
  artist: String,
  image: String,
  fullDate: Object,
  description: String,
  genres: Array,
  isFavorite: Boolean,
  previewUrl: String
})

module.exports = Concert
