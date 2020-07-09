module.exports = {
  age: function(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);
  
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const month = today.getMonth() - birthDate.getMonth();
  
    if(month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) 
      age -= 1
  
  return age;
  },
  date: function(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear();

    const month = `0${date.getUTCMonth() + 1}`.slice(-2);

    const day = `0${date.getUTCDate()}`.slice(-2);
    
    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    };
  },
  graduation: function (schooling) {
    let graduation = "";

    if (schooling == "medio") {
      graduation = "Ensino Médio Completo";
    } else if ((schooling == "graduate")) {
      graduation = "Ensino Superior Completo";
    } else if ((schooling == "masters")) {
      graduation = "Mestrado";
    } else {
      graduation = "Doutorado";
    }

    return graduation;
    
  },
  class_type: function(type) {
    let class_type = "";

    if (type == "presential") {
      class_type = "Presencial";
    } else {
      class_type = "Distância";
    }

    return class_type; 
  },
  grade: function (school_year) {
    let grade = "";

    if (school_year == "5EF") {
      grade = "5º Ano do Ensino Fundamental";
    } else if ((school_year == "6EF")) {
      grade = "6º Ano do Ensino Fundamental";
    } else if ((school_year == "7EF")) {
      grade = "7º Ano do Ensino Fundamental";
    } else if ((school_year == "8EF")) {
      grade = "8 Ano do Ensino Fundamental";
    } else if ((school_year == "1EM")) {
      grade = "1º Ano do Ensino Médio";
    } else if ((school_year == "2EM")) {
      grade = "2º Ano do Ensino Médio";
    } else {
      grade = "3º Ano do Ensino Médio";
    }

    return grade;
  }
}

