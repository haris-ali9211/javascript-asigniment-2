// 1. Write a function that displays current date & time in your browser.

// function dateTime(){
//     var time=new Date()
//     document.write(time)
// }
// dateTime();

// 2. Write a function that takes first & last name and then it greets the user using his full name.

// function wellcome(){
//     var first=prompt("enter your first name")
//     var last=prompt("enter your first name")
//     document.write("wellcome "+first+" "+last)
// }
// wellcome();

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var a=prompt("enter first no")
// var b=prompt("enter second no")
// var c=a+b

// function add(a, b) {
//     var a = +prompt("enter first no")
//     var b = +prompt("enter second no")
//     var c = a + b
//     document.write(c)
// }
// add()

// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// var num1=+prompt("enter your first number");
// var num2=+prompt("enter your second number");
// var opr=prompt("select operator from '+' ,'-' , '*' , '/' ")

// function calculator(num1 ,opr ,num2  ){
//     if(opr == "+"){
//         return num1 + num2
//     }
//     else if(opr == "-"){
//         return num1 - num2
//     }
//     else if(opr == "*"){
//         return num1 * num2
//     }
//     else if(opr == "/"){
//         return num1 / num2
//     }

// }
// var result= calculator(num1,opr,num2);
// document.write(result)
// 

// 5. Write a function that squares its argument.

// var num=+prompt("enter your num")

// function squares(num){ 
//     return num*num 
// }
// var result=squares(num)
// document.write(result)


// 6. Write a function that computes factorial of a number.


// var num = prompt("Enter a number");
// function factorial(){
//   var fact=1;
//    for(var i=1; i<=num; i++){
//       var fact = fact*i;
//    }
//    document.write("Factorial: "+fact);
// }
// factorial();


// 7. Write a function that take start and end number as inputs & display counting in your browser.

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter Second number");
// function counting(){
//    for(var i=num1; i<=num2; i++){
//       document.write(i+"<br>");
//    }
// }
// counting();


// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// var base =+prompt("enter your base ")
// var pre =+prompt("enter your prependicular")

// function outer(){
//     var hypoo=base*base + pre*pre
//     inner()
//     function inner(){
//         var result=Math.sqrt(hypoo)
//         document.write("<br>"+ result)
//     }
// }
// outer()

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables



// i. Arguments as value

// var height;
// var base;

// function areaOFrectangle(height=10,base=5){
//     return base*height
// }

// var result=areaOFrectangle(height,base);
// document.write(result)

// ii. Arguments as variables

// var height = +prompt("enter height")
// var base = +prompt("enter base")

// function areaOFrectangle(height, base) {
//     return base * height
// }

// var result=areaOFrectangle(height,base);
// document.write(result)

// 10. Write a JavaScript function that checks whether a passedstring is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// var word = prompt("Enter a word");
// var check="";
// function palindrome(){
//    for(var i=word.length-1; i>=0; i--){
//       check= check + word[i];
//    }
//    if(word == check){
//       document.write(word+" is a palindrome");
//    }
//    else{
//       document.write(word+" is not a palindrome");
//    }
// }
// palindrome();

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'



// var text ="the quick brown fox"
// var text1=text.split('')

// var leter=text1[0].toUpperCase()
// document.write(leter)

// for(var i=1 ; i<19 ; i++){
//     if(text1[i] === ' '){
//         text1[i+1]=text1[i+1].toUpperCase()
//     }
// }
// for(var i=1 ; i<19 ; i++){
//     document.write(text1[i])
// }

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// var str = "Web Development Tutorial"
// var strSplit = str.split(' ')

// var word1 = strSplit[0].length
// var word2 = strSplit[1].length
// var word3 = strSplit[2].length


// function great() {

//     if (word1 >= word2) {
//         document.write(strSplit[0] + " is greater")
//     } else if (word2 >= word3) {
//         document.write(strSplit[1] + " is greater")
//     } else {
//         document.write(strSplit[2] + " is greater")
//     }
// }
// great();

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

// var str = "JSResourceS.com";
// var letter = "o";
// var count=0;

// var strSplit = str.split('')
// function count1(str,letter){

// for (var i=0; i < 15; i++) {
//     if (strSplit[i] === letter) {
//         count = count + 1;
//     }
// }
//  return count;
// }
// var result = count1(str,letter);
// document.write(result)


// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// var radius=+prompt("Enter a number");
// function calcCircumference(radius){
//    var Circumferenceofcircle =2*3.142*radius;
//    document.write("Circumference of circle: "+Circumferenceofcircle+"<br>");
// }
// function calcArea(radius){
//    var Areaofcircle =3.142*radius*radius;
//    document.write("Area of circle: "+Areaofcircle);
// }
// calcCircumference(radius);
// calcArea(radius);