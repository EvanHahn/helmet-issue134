const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  res.send('router root')
})

router.get('/about', function (req, res) {
  res.send('router /about')
})

module.exports = router
