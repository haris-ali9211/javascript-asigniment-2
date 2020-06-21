// 1. Write a program that displays current date and time in your browser.

// var a= new Date();
// document.write(a)

// 2. Write a program that alerts the current month in words. For example December.

// var d = new Date();
// var n = d.getMonth();
// document.write(n+"<br>")

//     if(n=="0"){
//         document.write("Current month :January")
//     }
//     else if(n=="1"){
//         document.write("Current month :February")
//     }
//     else if(n=="2"){
//         document.write("Current month :March")
//     }
//     else if(n=="3"){
//         document.write("Current month :April")
//     }
//     else if(n=="4"){
//         document.write("Current month :May")
//     }
//     else if(n=="5"){
//         document.write("Current month :June")
//     }
//     else if(n=="6"){
//         document.write("Current month :July")
//     }
//     else if(n=="7"){
//         document.write("Current month :August")
//     }
//     else if(n=="8"){
//         document.write("Current month :September")
//     }
//     else if(n=="9"){
//         document.write("Current month :October")
//     }
//     else if(n=="10"){
//         document.write("Current month :November")
//     }
//     else if(n=="11"){
//         document.write("Current month :December")
//     }

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var a= new Date();
// var b=a.toString()
// document.write(b+"<br>")
// var c=b.slice(0,3)
// document.write("today is "+c)

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var a= new Date();
// var b=a.toString()
// document.write(b+"<br>")
// var c=b.slice(0,3)
// document.write("today is "+c)

// if(c==="Sat"|c==="Sun"){
//     document.write("ITS FUN DAY")
// }
// else{
//     document.write("ITS WORD DAY")
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand.

// var a= new Date();
// document.write(a +"<br>")
// var today=a.getTime();
// var sec=((today)/1000*60)
// var min=((today)/1000*60*60)
// document.write("Elapsed miliswcont since january 1,1970"+sec+"<br>")
// document.write("Elapsed minutes since january 1,1970"+min+"<br>")


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.


// var a= new Date();
// document.write(a +"<br>")
// var c=a.toString()
// var b = c.slice(16,18)
// // document.write(b+"<br>")
// if(b>=12||b<=23){
//     document.write("its PM")
// }
// else {
//     document.write("its AM")
// }


// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var fixDate = new Date("Dec 31, 2020");
// document.write(fixDate+"<br>");

// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 


// var date = new Date();
// var gTime = date.getTime();
// var fixDate = new Date("April 23, 2020");
// document.write(fixDate+"<br><br>");
// var gFTime = fixDate.getTime();
// var diff = gTime - gFTime;
// var sol = diff/(1000*60*60*24)
// document.write(Math.floor(sol)+" Days have passed 1st Ramadan,2020")

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var date =new Date()
// document.write(date+"<br>")
// var time = date.getTime()

// var fixDate =new Date("Dec, 2015")
// document.write("<br>"+fixDate)
// var fixTime =fixDate.getTime()

// var todaySec=time-fixDate
// var todaySecpast=(todaySec/1000*60)

// document.write("<br>"+todaySecpast+" Second had passed since today")


// 11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var a= new Date();
// var copy=a.toString()
// document.write(copy+"<br>")
// var copy1 = copy.slice(0,16)
// document.write(copy1)


// var copy2 = copy.slice(18,255)
// document.write(copy2)

// var copy2=copy.slice(16,18)
// var had = parseInt(copy2);
// document.write("<br>"+copy1+copy2)

// if(had==23){
//     var hour=00
// document.write(copy1+hour+copy2)
// }
// else{
//     var hour=had+1
// document.write(copy1+hour+copy2)
// }

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var a= new Date();
// var copy=a.toString()

// var copy1 = copy.slice(0,16)

// var copy2=copy.slice(16,18)

// var had = parseInt(copy2);


// var copy3 = copy.slice(18,255)

// if(had==23){
//     had=00
//     document.write("current date :"+a+"<br>")
//     document.write("1 hour ago,it will")
//     document.write(copy1+had+copy3) 
// }
// else {
//     had=had+1
//     document.write("current date :"+a+"<br>")
//     document.write("1 hour later,it will ")
//     document.write(copy1+had+copy3) 
// }


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var s=new Date()
// document.write("Current date "+s+"<br>")
// var fixDate =new Date("1920")
// document.write("100 years back, it was "+fixDate)

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser

// var age=prompt("enter your age")
// var year=2020-age
// document.write("your birth year is "+year)

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


// var name = prompt("Enter Customer Name");
// document.write("Customer Name: "+name+"<br>");
// var date = new Date();
// var month =["Januaray","February","March","April","May","June","July","August","September","October","November","December"]
// var getmon = date.getMonth();
// document.write("Current month: "+month[getmon]+"<br>");
// document.write("Number of units: 410"+"<br>");
// document.write("Charges per unit: 16"+"<br>");
// var nAmount = 410 * 16;
// document.write("Net Amount Payable (within Due Date): "+nAmount+"<br>");
// document.write("Late payment charges: 350"+"<br>");
// var gAmount = nAmount+350;
// documen