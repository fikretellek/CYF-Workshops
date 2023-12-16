// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

function checkLivesNearCYF(person) {
  const cyfLocations = [
    "Birmingham",
    "Cape Town",
    "Glasgow",
    "London",
    "Manchester",
  ];
  return cyfLocations.includes(person.city); //city instead of location
}

const mo = {
  name: "Mo",
  city: "Glasgow",
  focus: "React",
};

const sayed = {
  name: "Sayed",
  city: "Edinburgh",
  focus: "SQL",
};

console.assert(checkLivesNearCYF(mo));
// undefined
console.assert(!checkLivesNearCYF(sayed));
// undefined
