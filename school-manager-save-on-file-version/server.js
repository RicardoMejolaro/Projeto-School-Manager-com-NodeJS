const express = require('express');
const nunjucks = require('nunjucks');
const routes = express.Router();

const server = express();

server.use(express.urlencoded({ extended: true}));
server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

routes.get('/', (req, res) => {
  res.render('teachers/index');
})

server.listen(5000, () => {
  console.log("Server is Running!");
});