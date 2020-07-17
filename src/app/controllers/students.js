const { date, grade } = require('../../lib/utils');

//Index
exports.index = (req, res) => {
  let students = [];

  for (const student of data.students) {
    let year_school = student.school_year

    students.push({
      ...student,
      school_year: grade(year_school)
    })
  }

return res.render('students/index', { students });
}
//Create
exports.create = (req, res) => {
  res.render('students/create')
}
//Post
exports.post = (req, res) => {
  //Validação de todos os campos de cadastro
  const keys = Object.keys(req.body);

  for (const key of keys) {
    if (req.body[key] == "") {
      res.render('Por gentileza preencha todos os campos!');
    }
  }

  let { avatar_url, name, email, birth, school_year, workload } = req.body;

  birth = Date.parse(birth);

  let id = 1;
  const lastStudent = data.students[data.students.length - 1];

  if (lastStudent) {
    id = Number(lastStudent.id + 1);
  }

  const created_at = Date.now();

  data.students.push({
    id,
    avatar_url,
    name,
    email,
    birth,
    school_year,
    workload,
    created_at
  });


  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar o arquivo!')

    return res.redirect(`/students/${id}`);
  });
}
//Show
exports.show = (req, res) => {
  const { id } = req.params;

  const foundStudent = data.students.find((student) => {
    return student.id == id;
  });

  if (!foundStudent) return res.send('Aluno não encontrado!');

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).birthDay,
    school_year: grade(foundStudent.school_year)
  }

  return res.render('students/show', { student });

}
//Edit
exports.edit = (req, res) => {
  const { id } = req.params

  const foundStudent = data.students.find((student) => {
    return student.id == id;
  });

  if (!foundStudent) return res.send('Professor não encontrado!');

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).iso,
  }

  return res.render('students/edit', { student });
}
//Put
exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundTeacher = data.students.find((student, foundIndex) => {
    if (student.id == id) {
      index = foundIndex;

      return true
    }
  });

  if (!foundTeacher) return res.send('Instrutor não encontrado!');

  const student = {
    ...foundTeacher,
    ...req.body,
    id: Number(req.body.id),
    birth: Date.parse(req.body.birth)
  }

  data.students[index] = student;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect(`/students/${id}`);
  });
}
//Delete
exports.delete = (req, res) => {
  const { id } = req.body

  const filteredStudents = data.students.filter((student) => {
    return student.id != id;
  });

  data.students = filteredStudents;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect('/students');

  });
}