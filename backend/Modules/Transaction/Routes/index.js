const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const transactionModel = require('../Model/index')

// const { receive_transaction } = require('../Controllers')
const multer = require('multer')
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/src/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  },
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype == 'image/png'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
})

//routes
router.get('/getAllTransaction', function (req, res) {
  transactionModel
    .find()
    .select()
    .exec()
    .then((data) => {
      res.status(200).json({
        message: 'OK',
        results: data,
      })
    })
    .catch((err) => {
      res.json(err)
    })
})

router.post('/getTransaction', async function (req, res) {
  const { id } = req.body
  console.log(id)

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such transaction in DB' })
  }
  const transactionByID = await transactionModel.findById(id)

  if (!transactionByID) {
    return res.status(404).json({ error: 'No such transactions' })
  }
  console.log(transactionByID)
  res.status(200).json(transactionByID)
})

router.post(
  '/transaction-success',
  upload.single('image'),
  async (req, res) => {
    console.log(req.file)
    var productDetails = await new transactionModel({
      _id: mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      date: req.body.date,
      transactionStatus: req.body.transactionStatus,
      paymentMode: req.body.paymentMode,
      transactionId: req.body.transactionId,
      note: req.body.note,
      imagePath: req.file.filename,
      amount: req.body.amount,
    })

    const response = await productDetails.save()
    console.log(response)
    res.status(200).json(response)
  }
)

module.exports = router
