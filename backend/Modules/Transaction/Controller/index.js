const { request } = require('express')
// const Transaction = require('../Models')


const mongoose = require('mongoose')



// create new transaction
const create = async (req, res) => {
  const { firstname, lastname, Phonenumber } = req.body

  try {
    if (firstname === '' || lastname === '' || Phonenumber === '') {
      res.status(500).json({ error: 'All fields are required.' })
    }

    
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}



module.exports = {
  getAll,

}
