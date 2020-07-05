const connection  = require('../database/connection')

module.exports = {
    async store(req,res){
        const { name, email, password } = await req.body

       const seedUser = await connection('seed-users').insert({
            name,
            email,
            password
        })


        return res.json(seedUser)
    },

    async index(req,res){
        const seedUsers = await connection('seed-users').select('*')

        return res.json(seedUsers)
    }
}