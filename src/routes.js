const express = require('express')


const SeedUser = require('./controllers/SeedUser')

const routes = express.Router()



routes.get('/seed-user', SeedUser.index)
routes.post('/seed-user', SeedUser.store)

module.exports = routes