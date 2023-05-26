const n1 = 7;
const n2 = 6;
const n3 = 9; 

const average = (n1 + n2 + n3) / 3; 
console.log(average)

if (average < 5) {
    console.log('You have been disapproved.');
  } else if (average >= 5 && average <= 7) {
    console.log('You are in recovery.');
  } else {
    console.log('Congratulations, you did it.');
  }; 