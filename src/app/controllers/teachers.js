const { age, date } = require('../../lib/utils');
const { graduation, grade, class_type } = require('../../lib/utils');
const Teacher = require('../models/Teacher');

module.exports = {
  index(req, res) {
    Teacher.all((teachers) => {
      return res.render('teachers/index', { teachers });
    });
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

    const { avatar_url, name, birth_date, education_level, class_type, subjects_taught } = req.body;

    const data = [
      avatar_url,
      name,
      date(birth_date).iso,
      education_level,
      class_type,
      subjects_taught,
      date(Date.now()).iso
    ]

    Teacher.create(data, (teacher) => {
      return res.redirect(`/teachers`);
    });

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

