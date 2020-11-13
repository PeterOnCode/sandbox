const express = require('express')
const messages = require('../db/messages')

const router = express.Router()

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })
router.get('/', (req, res) => {
  res.json({
    message: 'Behold The MEVN Stack!'
  })
})

router.get('/messages', (req, res) => {
  messages.getAll().then((messages) => {
    res.json(messages)
  })
})

module.exports = router
