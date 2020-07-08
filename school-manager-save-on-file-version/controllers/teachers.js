const fs = require('fs');
const data = require('../file-system/data.json');
const { age, date, graduation } = require('../utils/utils');

//Index
exports.index = (req, res) => {
  res.render('teachers/index');
}
//Create
exports.create = (req, res) => {
  res.render('teachers/create')
}
//Post
exports.post = (req, res) => {
  //Validação de todos os campos de cadastro
  const keys = Object.keys(req.body);

  for (const key of keys) {
    if(req.body[key] == "") {
      res.render('Por gentileza preencha todos os campos!');
    }
  }

  let { avatar_url, name, birth, schooling, class_type, services } = req.body;

  let id = 1;
  const lastTeacher = data.teachers[data.teachers.length - 1];

  if (lastTeacher) {
    id = Number(lastTeacher.id + 1);
  }  

  const created_at = Date.now();

  data.teachers.push({
    id,
    avatar_url, 
    name, birth, 
    schooling, 
    class_type, 
    services,
    created_at
  });


  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar o arquivo!')

    return res.redirect(`/teachers/${id}`);
  });
}
//Show
exports.show = (req, res) => {
  const { id } = req.params;

  const foundTeacher = data.teachers.find((teacher) => {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send('Professor não encontrado!');
  
  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    schooling: graduation(foundTeacher.schooling),
    services: foundTeacher.services.split(','),
    created_at: new Intl.DateTimeFormat("en-GB").format(foundTeacher.created_at)
  }

  return res.render('teachers/show', { teacher });
  
}
//Edit
exports.edit = (req, res) => {
  const { id } = req.params

  const foundTeacher = data.teachers.find((teacher) => {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send('Instrutor não encontrado!');

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso
  }

  return res.render('teachers/edit', { teacher });
}