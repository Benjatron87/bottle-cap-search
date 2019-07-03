const mongoose = require('mongoose')
const Schema = mongoose.Schema

let imgSchema = new Schema({
 brand: {
  type: String
 },
 imgPath: {
  type: String
 }
})

const Img = mongoose.model('img', imgSchema)

module.exports = Img