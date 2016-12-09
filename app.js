const express = require('express')
const path = require('path')
const helmet = require('helmet')
const routes = require('./routes')

const app = express()

app.use(helmet())

app.use(express.static(path.join(__dirname, 'static')))

app.use('/', routes)

app.listen(3000, () => { console.log('app started') })
