const { date, grade } = require('../../lib/utils');
const Student = require('../models/Student');

module.exports = {
  index(req, res) {
    Student.all((studentsNew) => {
      let students = [];

      for (const student of studentsNew) {
        let year_school = student.school_year;
    
        students.push({
          ...student,
          school_year: grade(year_school)
        })
      }
      return res.render('students/index', { students });
    });
  },
  create(req, res) {
    return res.render('students/create');
  },
  post(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }
    const { avatar_url, name, email, birth, school_year, workload } = req.body;

    const data = [
      avatar_url,
      name,
      email,
      date(birth).iso,
      school_year,
      workload,
    ];

    Student.create(data, (student) => {
      return res.redirect(`/students/${student.id}`);
    });

  },
  show(req, res) {
    Student.find(req.params.id, (student) => {
      if(!student) return res.send('Aluno não localizado!');

      student.birth = date(student.birth).birthDay;
      student.school_year = grade(student.school_year);


      return res.render('students/show', { student })
    });
  },
  edit(req, res) {
    Student.find(req.params.id, (student) => {
      if(!student) return res.send('Aluno não localizado!');

      student.birth = date(student.birth).iso;

      return res.render('students/edit', { student })
    });
  },
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }
    
    const { avatar_url, name, email, birth, school_year, workload, id } = req.body;

    const data = [
      avatar_url,
      name,
      email,
      date(birth).iso,
      school_year,
      workload,
      id
    ];

    Student.update(data, () => {
     return res.redirect(`/students/${id}`);
    });
  },
  delete(req, res) {
    Student.delete(req.body.id, () => {
      return res.redirect(`/students`);
     });
  }
}

