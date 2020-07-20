const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`
      SELECT *
      FROM students
      ORDER BY name ASC`, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
          INSERT INTO students (
            avatar_url,
            name,
            email,
            birth,
            school_year,
            workload
          ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);

    });
  },
  find(id, callback) {
    db.query(`SELECT * FROM students where id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);
    });
  },
  update(data, callback) {
    const query = `
          UPDATE students SET 
          avatar_url=($1),
          name=($2),
          email=($3),
          birth=($4),
          school_year=($5),
          workload=($6)
          WHERE id = $7
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();

    });
  },
  delete(id, callback) {
    db.query(`DELETE FROM students WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();
    });
  }
}