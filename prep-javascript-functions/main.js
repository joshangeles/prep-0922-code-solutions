function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var AddedNumbers = addTwoNumbers(2, 2);

console.log('addTwoNumbers Function Result:', AddedNumbers);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var ConvertedMinutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Function Result:', ConvertedMinutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var completedPhrase = getGreeting('Josh');
console.log('getGreeting Function Result:', completedPhrase);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Function Result:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Function Result:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Function Result:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Function Result:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Joshua', 'Angeles');
console.log('getFullName Function Result:', getFullNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log('cube Function Result:', cubeResult);
