const fs = require('fs');
const data = require('../file-system/data.json');
const { age, date, graduation, class_type } = require('../utils/utils');

//Index
exports.index = (req, res) => {
  return res.render('teachers/index', { teachers: data.teachers });
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

  birth = Date.parse(birth);

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
    class_type: class_type(foundTeacher.class_type),
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
//Put
exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundTeacher = data.teachers.find((teacher, foundIndex) => {
    if (teacher.id == id) {
      index = foundIndex;

      return true
    }
  });

  if (!foundTeacher) return res.send('Instrutor não encontrado!');

  const teacher = {
    ...foundTeacher,
    ...req.body,
    id: Number(req.body.id),
    birth: Date.parse(req.body.birth)
  }

  data.teachers[index] = teacher;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect(`/teachers/${id}`);
  });
}
//Delete
exports.delete = (req, res) => {
  const { id } = req.body

  const filteredTeachers = data.teachers.filter((teacher) => {
    return teacher.id != id;
  });

  data.teachers = filteredTeachers;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect('/teachers');

  });
}