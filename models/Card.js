const mongoose = require('mongoose');

const pointsPerk = new mongoose.Schema({
  points: Number,
  category: { type: String, enum: ['dining', 'entertainment', 'other'] },
});

// TODO: checkbox perks
// const checkPerks = new mongoose.Schema({
//   checked: Number,
// });

const cardSchema = new mongoose.Schema({
  issuer: { type: String, default: 'Some crappy company' },
  name: String,
  network: String,
  useType: String,

  pointsPerks: [pointsPerk],

  // TODO: check perks array
  // checkPerks: [
  //   {
  //     checked: Boolean,
  //     default: false,
  //   },
  // ],
});

module.exports = mongoose.model('Cards', cardSchema);
