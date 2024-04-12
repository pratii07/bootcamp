// 1. Write a program that checks if a given number is even or odd.
// function checkit(name,age){
//     if(age>=18){
//         console.log(`hey ${name}, your age is ${age}. you are eligible.`);
//     }
//     else{
//         console.log(`hey ${name}, your age is ${age}. you are not eligible.`);
//     }
// }
// let name='pratiksha';
// let age= 22;
// checkit(name,age)

// 2. Create a function that takes two numbers as parameters and returns the larger one.
// function largerone(a,b){
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// let num1=8;
// let num2=7;
// let ans=largerone(num1,num2);
// console.log(ans);

// 3. Write a function that determines if a given year is a leap year.
// function leapOrNot(leapyear){
//     if((leapyear%4==0 && leapyear%100 !=0) || (leapyear%400==0)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let l=2019;
// let ans = leapOrNot(l);
// if(ans){
//     console.log(`${l} is leap year.`);
// }
// else{
//     console.log(`${l} is Not leap year.`);
// }

// 4. Implement a program that checks whether a given character is a vowel or consonant.
// function checkscharacter(ch){
//     if(ch=='a'|| ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'|| ch=='A'|| ch=='E'|| ch=='I'|| ch=='O'|| ch=='U'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let ch='P';
// let ans = (checkscharacter(ch))
// if(ans){
//     console.log(`${ch} is vowel.`);
// }
// else{
//     console.log(`${ch} is consonant.`);
// }

// 5. Create a function that takes three numbers as input and returns the largest among them.
// function largest(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }
//     else if(b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// let x = 15;
// let y = 6;
// let z = 9;
// let ans= largest(x,y,z);
// console.log(`${ans} is largest Number.`);

// 6. Write a program that checks if a given number is positive, negative, or zero.
// function checknumber(n){
//     if(n==0){
//         return 'zero';
//     }
//     else if(n>0){
//         return 'positive';
//     }
//     else{
//         return 'negative';
//     }
// }
// const num=0;
// const ans=checknumber(num);
// console.log(`given number is ${ans}.`)
// 7. Implement a function that calculates the grade of a student based on their score.
// function calculategrade(g){
//     if(g>=90){
//         return 'A';
//     }
//     else if(g>=80){
//         return 'B';
//     }
//     else if(g>=70){
//         return 'C';
//     }
//     else{
//         return 'D';
//     }
// }
// const score=76;
// const ans=calculategrade(score)
// console.log(`the grade of a student is ${ans}.`)

// 8. Create a program that determines if a given string is a palindrome.
// function palindromOrNot(s){
//     let l= s.length;
//     let j=l-1;
//     for(let i=0;i<l/2;i++){
//         if(s[i]!=s[j]){
//             return false;
//         }
//         j=j-1;
//     }
//     return true;
// }
// const str='nayan';
// const ans = palindromOrNot(str);
// if(ans){
//     console.log(`${str} is palindrome.`);
// }
// else{
//     console.log(`${str} is Not palindrome.`)
// }
// 9. Write a function that checks whether a person is eligible to vote based on their age.
// function vote(age){
//     if(age>=18){
//         return 'you r eligible.'
//     }
//     else{
//         return 'you r not eligible.'
//     }
// }
// const age=12;
// const ans= vote(age)
// console.log(ans);

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
function typeOfTriangle(x,y,z){
    if(x==y==z){
        return 'Equilateral';
    }
    else if(x==y || y==z || x==z){
        return 'Isosceles';
    }
    else{
        return 'Scalene '
    }
}
const a=7;
const b=7;
const c=7;
const ans = typeOfTriangle(a,b,c);
console.log(`It is ${ans} Triangle.`);