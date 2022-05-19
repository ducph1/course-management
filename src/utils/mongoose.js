module.exports = {
  multipleMongoose: list => list.map(item => item.toObject()),
  
  singleMongoose: single => single ? single.toObject() : single
}