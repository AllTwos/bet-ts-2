const mongoose = require("mongoose");

const childBetSchema = new mongoose.Schema({
  id: {
    required: true,
    type: mongoose.ObjectId,
  },
  user: {
    required: true,
    type: String,
  },
  bet: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
});
const betCommentSchema = new mongoose.Schema({
  id: {
    required: true,
    type: mongoose.ObjectId,
  },
  user: {
    required: true,
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
});

const betSchema = new mongoose.Schema({
  id: {
    required: true,
    type: mongoose.ObjectId,
  },
  user: {
    required: true,
    type: String,
  },
  betTitle: {
    required: true,
    type: String,
  },
  betString: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  childBets: {
    required: true,
    type: [childBetSchema],
  },
  comments: {
    required: true,
    type: [betCommentSchema],
  },
});

const Bet = mongoose.model("Bet", betSchema);

module.exports = Bet;
