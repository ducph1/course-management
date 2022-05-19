const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

const Course = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, },
  videoId: {type: String, required: true},
  level: {type: String, },
  slug: {type: String, unique: true, slug: 'name'},
}, {
  timestamps: true,
})

mongoose.plugin(slug);
Course.plugin(mongoose_delete, { 
  overrideMethods: 'all',
  deletedAt : true,
})

module.exports = mongoose.model('Course', Course)
