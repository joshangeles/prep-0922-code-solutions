const person = {
  firstName: 'Josh',
  lastName: 'Angeles',
  hobby: 'Traveling'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is..." + fullName);
person.job = 'Aspiring Web Developer';
console.log("This person's previous job is..." + person.job);
person.previousJob = 'Chef';
console.log("This person's previous job is..." + person.previousJob);
console.log(person);
