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
            workload,
            teacher_id
          ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
    `
    db.query(query, data, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);

    });
  },
  find(id, callback) {
    db.query(`
      SELECT students.*, teachers.name AS teacher_name
      FROM students 
      LEFT JOIN teachers ON (students.teacher_id = teachers.id)
      where students.id = $1`, [id], (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows[0]);
    });
  },
  findBy(filter, callback) {
    db.query(`
    SELECT * 
    FROM students
    WHERE students.name ILIKE '%${filter}%'
    OR students.email ILIKE '%${filter}%'
    ORDER BY name ASC`, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
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
          workload=($6),
          teacher_id=($7)
          WHERE id = $8
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
  },
  teacherSelectOptions(callback) {
    db.query(`SELECT name, id FROM teachers`, (err, results) => {
      if (err) throw `Erro no banco de dados! ${err}`;

      callback(results.rows);
    });
  },
  paginate(params) {
    const { filter, limit, offset, callback } = params;

    let query = "",
        filterQuery = "",
        totalQuery = `(
          SELECT count(*) FROM students
          ) AS total`

    if (filter) {
      filterQuery = `${query}
      WHERE students.name ILIKE '%${filter}%'
      OR students.email ILIKE '%${filter}%'
      `
      totalQuery = `(
        SELECT count(*) FROM students
        ${filterQuery}
        ) as total
      `
    }

    query = `
    SELECT students.*, ${totalQuery}
    FROM students
    ${filterQuery}
    GROUP BY students.id LIMIT $1 OFFSET $2`

    db.query(query, [limit, offset], (err, results) => {
      if(err) throw `Erro no banco de dados ${err}`

      callback(results.rows);
    });
  }
}