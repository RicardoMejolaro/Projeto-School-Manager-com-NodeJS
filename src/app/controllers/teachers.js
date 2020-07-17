const { age, date } = require('../../lib/utils');

module.exports = {
  index(req, res) {
    return res.render('teachers/index', { teachers });
  },
  create(req, res) {
    return res.render('teachers/create');
  },
  post(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    return

  },
  show(req, res) {
    return
  },
  edit(req, res) {
    return
  },
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }
    return
  },
  delete(req, res) {
    return
  },
}

