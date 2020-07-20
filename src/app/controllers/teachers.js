const { age, date, graduation, class_type } = require('../../lib/utils');
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
    ];

    Teacher.create(data, (teacher) => {
      return res.redirect(`/teachers/${teacher.id}`);
    });

  },
  show(req, res) {
    Teacher.find(req.params.id, (teacher) => {
      if(!teacher) return res.send('Professor não localizado!');

      teacher.age = age(teacher.birth_date);
      teacher.education_level = graduation(teacher.education_level);
      teacher.class_type = class_type(teacher.class_type)
      teacher.subjects_taught = teacher.subjects_taught.split(',');
      teacher.created_at = date(teacher.created_at).format;

      return res.render('teachers/show', { teacher })
    });
  },
  edit(req, res) {
    Teacher.find(req.params.id, (teacher) => {
      if(!teacher) return res.send('Professor não localizado!');

      teacher.birth_date = date(teacher.birth_date).iso;

      return res.render('teachers/edit', { teacher })
    });
  },
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    const { avatar_url, name, birth_date, education_level, class_type, subjects_taught, id } = req.body;

    const data = [
      avatar_url,
      name,
      date(birth_date).iso,
      education_level,
      class_type,
      subjects_taught,
      id
    ];

    Teacher.update(data, () => {
     return res.redirect(`/teachers/${id}`);
    });
  },
  delete(req, res) {
    Teacher.delete(req.body.id, () => {
      return res.redirect(`/teachers`);
     });
  }
}

