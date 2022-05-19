const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
    console.log('Database connection successful!')
  } catch (error) {
    console.log('Database connection failed!')
  }
}

module.exports = { connect }