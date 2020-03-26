const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// criando uma rota/recursos (normalmente vem do banco de dados)
/* 
* Métodos HTTP: 
* GET: Buscar/listar uma infirmação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/** 
* Tipos de parâmentros:
* 
* Query Params: Parâmentros nomeados enviados na rota após o "?" (Filtros, paginação)
* Route Params: Parâmentros utilizados para identificar recursos (ex.: '/users/:id')
* Request Body: O corpo da requisieção, utilizado para criar ou alterar recursos
*/

/** 
 * SQL: MSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */ 
routes.post('/sessions', SessionController.create);

// rota de listagem 
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete); //Route Params

module.exports = routes;