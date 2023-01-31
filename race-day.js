
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
let runnerAge = 64;

registeredEarly ? (raceNumber += 1000) : (raceNumber);

if (runnerAge > 18 && registeredEarly === true) {
  console.log('The race will start at 9.30 am! Your race number is ' + raceNumber + '.');
} else if (runnerAge > 18 && !registeredEarly === true) {
  console.log('The race will start at 11:00 am! Your race number is ' + raceNumber + '.');
} else if (runnerAge < 18) {
  console.log('Youth registrants run at 12:30 pm! Your race number is ' + raceNumber + '.')
} else if (runnerAge === 18) {
  console.log('Please, see the registration desk!')
};

