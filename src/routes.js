const express = require('express')

const SessionSeedUser = require('./controllers/SessionSeedUser')
const SeedUser = require('./controllers/SeedUser')

const routes = express.Router()

routes.get('/seed-user', SeedUser.index)
routes.post('/seed-user', SeedUser.store)

routes.post('/login', SessionSeedUser.store)

module.exports = routes