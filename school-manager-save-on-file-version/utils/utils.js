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
    
  }
}

