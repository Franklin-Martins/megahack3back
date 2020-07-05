const connection  = require('../database/connection')

module.exports = {
    async store(req,res){
        const {email, password} = await req.body;

        const seedUser = await connection('seed-users')
            .where('email', email)
            .first()

        if (!seedUser){
            return res.status(404).json({message: "Not found"})
        }

        return res.json(seedUser)
    }
}