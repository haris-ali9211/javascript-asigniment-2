// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var firstName=prompt("enter your first name");
// var secondtName=prompt("enter your first name");

// var fullName=firstName+secondtName;
// alert("welcome "+ fullName + " hope you will be comfortable" );


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var info=prompt("enter some info about your favorite mobile phone model")
// alert("your faorite phone is: "+ info + " length of string: " + info.length)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var a="Pakistan";
// document.write("String: "+a+"<br>")
// var b=a.indexOf("n");
//  document.write("Index of 'n': "+b)

//  4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var a="Hello World";
// document.write("String: "+a+"<br>")
// var b=a.indexOf("l");
//  document.write("Index of 'l': "+b)

//  5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str="pakistan"
// document.write("string :" +str + "<br>")
// document.write("character at index 3: "+ str.charAt(3))


// 6. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName=prompt("enter your first name");
// var secondtName=prompt("enter your first name");
// var nameFull=firstName.concat(secondName);
// alert("welcome "+ fullName + " hope you will be comfortable" );

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var text ='Hyderabad'
// var indexNum =text.indexOf('Hyder')
// var firstText =text.slice(0,indexNum)
// var replaceText ='Islam';
// var thirdText = text .slice(indexNum+5)
// document.write(firstText+replaceText+thirdText)


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var message1= message.replace(/and/g,"&")
// document.write(message1)

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var a = "10";
// var b = parseInt(a);
// document.write("value is " + a);
// document.write("type : string");
// document.write("value is " + b);
// document.write("type : number");


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var str = prompt("enter your anyword");
// var res = str.toLowerCase();
// document.write("user input "+str)
// document.write("lower case "+res)

// 11. Write a program that takes user input. Convert and show the input in title case.

// var str = prompt("enter your anyword");
// var res = str.toUpperCase();
// document.write("user input "+str)
// document.write("upper case "+res)


// 12. Write a program that converts the variable num to string.

// var num = 35.36 ;
// var text=num.toString()
// var indexNum =text.indexOf('.')
// var firstText =text.slice(0,indexNum)
// var thirdText = text.slice(indexNum+1)
// var str=firstText+thirdText
// document.write(str)

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 

// var user=prompt("enter your user name")
// if(user=='33'|user=='44'|user=='46'|user=='64'){
//     alert(" enter a valid username")
// }


// 14. You have an arrayA = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

// pro = [cake,applepie, cookie, chips, patties]
// var ord=prompt("enter your food")
// var ord1=ord.toLowerCase()

// for(var i=0 ; i<pro.length; i++ ){
//     if(ord1===pro[i]){
//         document.write(ord+"is available at index "+ pro.indexof(pro[i])+"in the bakery")
//     }
//     else{
//         document.write("we are sorry "+ord+"is not available in our bakery")
//     }
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long

// var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// if(value.match(passw)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }


// 16. Write a program to convert the following string to an array using string split method.

// var university = 'University of Karachi';
// var spl=university.split(' ')

// var sp1=spl[0].split('')
// for(var i=0 ; i<sp1.length ;i++){
// document.write(sp1[i] +"<br>")
// }
// document.write("<br>")

// var sp2=spl[1].split('')
// for(var i=0 ; i<sp2.length ;i++){
// document.write(sp2[i] +"<br>")
// }

// document.write("<br>")

// var sp3=spl[2].split('')
// for(var i=0 ; i<sp3.length ;i++){
// document.write(sp3[i] +"<br>")
// }

// 17. Write a program to display the last character of a user input.

// var inpt=prompt("enter anyword")
// var inpt1=inpt.length-1
// document.write(inpt.charAt(inpt1))

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string

// var h="The quick brown fox jumps over the lazy dog"
// var text=h.toLowerCase()
// var text1=text.split(' ')

// var num=0;
// for(var i=0 ; i<text1.length ; i++){
//     if(text1[i]=="the"){
//         num=num+1;
//     }
   
// }
// document.write("NO of THE: "+num)