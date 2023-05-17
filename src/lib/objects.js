const createPerson = (name, age) => {
  return {
    name,
    age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => person.age > 65;

const getAges = people => {
  const arrAges = [];
  for (let i = 0; i < people.length; i++) {
    arrAges.push(people[i].age);
  }
  return arrAges;
};

const findByName = (name, people) => {
  return people.filter(person => person.name === name)[0];
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((acc, a) => a.age + acc, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce: stranger => {
      return `Hi ${stranger}, my name is ${person.name} and I am ${person.age}!`;
    },
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
