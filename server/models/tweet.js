const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tweetSchema  = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  publicId: {
    type: String
  },
  // likes: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "like"
  // }],
}, { timestamps: true })

// it will pluralise this name in the db so 'blogs'
const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet;