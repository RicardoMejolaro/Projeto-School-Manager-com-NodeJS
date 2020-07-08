const fs = require('fs');
const data = require('../file-system/data.json');

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

    return res.redirect(`/teachers`);
  });
}