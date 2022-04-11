var costOfMilk = 3;

if (costOfMilk < 2) {
console.log("we will buy two gallons");
} else if (costOfMilk < 3) {
    console.log("we will buy only one gallon");
} else {
    console.log("no thanks, too expensive!");
}

/*
var grade = 91;

    switch (grade) {
        case 100-91:
            console.log('A');
            break;
        case 90-81:
            console.log('B');
            break;
        case 80-71:
            console.log('C');
            break;
        case 70-69:
            console.log('D');
            break;
        default:
            console.log('You did not pass');
              
      }
*/

/* TESTING LOOPS, RUN TO SEE
for (let i = 0; i <= 5; i ++) {
        console.log(i);
}

for (let i = 0; i <= 10; i ++ ) {
     if (i % 2 == 0) {
         console.log(i);
    }
}
*/

let names = ['Allison', 'Kayla', 'Justin'];

for (let i = 0; i < names.length; i ++) {
    console.log(names[i])
}

/* var name = window.prompt("What is your name?");
window.alert(`Welcome, ${name}`);
*/

/*
var monthNumber = '6';

switch (monthNumber) {
    case '1':
        console.log('January');
        break;
    case '2':
        console.log('February');
        break;
    case '3':
        console.log('March');
        break;
    case '4':
        console.log('April');
        break;
    case '5':
        console.log('May');
        break;
    case '6':
        console.log('June');
        break;
    case '7':
        console.log('July');
        break;
    case '8':
        console.log('August');
        break;
    case '9':
        console.log('September');
        break;
    case '10':
        console.log('October');
        break;
    case '11':
        console.log('November');
        break;
    case '12':
        console.log('December');
        break;
    default:
        console.log('Invalid Month');
}
*/
/*
for (let i = yourNumber; i <= 100; i ++) {
    console.log(i);
}
*/
/*
if(num1 == num2){
    console.log("same");
}
else if(num1 < num2){
    console.log(num1)
} else {
    console.log(num2)
}


 if (num1 > num2) {
console.log(num2);
} else if (num2 > num1) {
    console.log(num1);
} else {
    console.log("same");
}
*/
/*
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}
while (userNumber <= 100){
    console.log(userNumber++);
}
*/
/*
if(myNumber>num1){
    console.log(num1 + " is smaller than my number, " + myNumber);
} else if (myNumber<num1){
    console.log(num1 + " is larger than my number, " + myNumber);
} else (myNumber==num1);{
    console.log(num1 + " is equal to my number, " + myNumber);
}
    
if ( num1 < myNumber ) {
    console.log(num1 + " is smaller than my number, " + myNumber);
} else if ( num1 > myNumber){
    console.log(num1 + " is larger than my number, " + myNumber);
} else {
    console.log(num1 + " is equal to my number, " + myNumber);
}
*/

let userNumber=60
do {userNumber;
  userNumber + 6;} 
while (userNumber <= 100);
