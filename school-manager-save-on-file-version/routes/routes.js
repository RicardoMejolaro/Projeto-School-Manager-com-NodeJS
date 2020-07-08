const express = require('express');
const routes = express.Router();
const teachers = require('../controllers/teachers');

routes.get('/', (req, res) => {
  return res.redirect('/teachers');
});
routes.get('/teachers', teachers.index);
routes.get('/teachers/create', teachers.create);

routes.post('/teachers', teachers.post);

module.exports = routes;