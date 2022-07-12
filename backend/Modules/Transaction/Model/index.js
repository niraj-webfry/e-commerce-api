const mongoose = require('mongoose')

const Schema = mongoose.Schema

const transactionSchema = new Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: String,
      allowNull: false,
    },
    lastName: {
      type: String,
      allowNull: false,
    },
    phone: {
      type: Number,
      allowNull: false,
    },
    email: {
      type: String,
      allowNull: false,
    },
    date: {
      type: Date,
      allowNull: false,
    },
    transactionStatus: {
      type: String,
      allowNull: false,
      default: 'in-progress',
    },
    paymentMode: {
      type: String,
      allowNull: false,
    },
    transactionId: {
      type: String,
      allowNull: false,
    },
    note: {
      type: String,
      allowNull: false,
      default: '',
    },
    imagePath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Transaction', transactionSchema)
