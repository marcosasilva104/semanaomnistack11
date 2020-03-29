const generateUniqueId = require('../utils/generateUniqueId');
// const crypto = require('crypto'); foi para a função de teste unitário assima
const connection = require('../database/connection');

module.exports = {
     // rota de listagem
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
   
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf} = request.body; 
    
        // const id = crypto.randomBytes(4).toString('HEX'); antes da criação do teste unitário
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        // console.log(data);
    
        return response.json({ id });
    }
};