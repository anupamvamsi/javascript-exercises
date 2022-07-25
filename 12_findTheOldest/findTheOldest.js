const findTheOldest = function (people) {
  let currentYear = new Date().getFullYear();

  // let oldest = people.reduce((oldy, person) => {
  //   let age, personOldest;
  //   if (person.yearOfDeath) {
  //     age = person.yearOfDeath - person.yearOfBirth;
  //   } else {
  //     age = currentYear - person.yearOfBirth;
  //   }
  //   if (oldy < age) {
  //     oldy = person;
  //     return age;
  //   }
  //   return oldy;
  // }, {});

  // console.log(oldest);
  // return oldest;

  let oldest = people.sort((person1, person2) => {
    let age1, age2;
    if (!person1.yearOfDeath) {
      age1 = currentYear - person1.yearOfBirth;
    } else {
      age1 = person1.yearOfDeath - person1.yearOfBirth;
    }

    if (!person2.yearOfDeath) {
      age2 = currentYear - person2.yearOfBirth;
    } else {
      age2 = person2.yearOfDeath - person2.yearOfBirth;
    }

    return age2 - age1;
  });

  console.log(oldest);
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
