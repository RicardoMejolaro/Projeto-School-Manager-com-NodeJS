const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`
      SELECT *
      FROM teachers
      ORDER BY name ASC`, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
          INSERT INTO teachers (
            avatar_url,
            name,
            birth_date,
            education_level,
            class_type,
            subjects_taught,
            created_at
          ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);

    });
  },
  find(id, callback) {
    db.query(`SELECT * FROM teachers where id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);
    });
  },
  update(data, callback) {
    const query = `
          UPDATE teachers SET 
          avatar_url=($1),
          name=($2),
          birth_date=($3),
          education_level=($4),
          class_type=($5),
          subjects_taught=($6)
          WHERE id = $7
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();

    });
  },
  delete(id, callback) {
    db.query(`DELETE FROM teachers WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback();
    });
  }
}