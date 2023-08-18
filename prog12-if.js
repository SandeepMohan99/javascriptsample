/* write the program to print fizz is the number is divisible by 3
buzz id divisible by 5
fizzbuzz if divisible by 15 */

var num1 = 15

if (num1%15==0) {
    console.log('fizzbuzz');
} 
else if(num1%5==0){
    console.log('buzz');
}

else if(num1%3==0){
    console.log('fizz');
}

else{'number is not divisible by 3, 5 or 15'}