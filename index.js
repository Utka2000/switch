/**Using the JavaScript switch statement to find the number of days in the given month (get month and year from user) count based on a month     
If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.  
 If the month is 4, 6, 9, or 11, the number of days in that month is 30.   
If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.  
 If the month is not in the valid range (1-12), the default branch executes and sets the day Count variable to -1, which indicates the invalid month.
**/
let x=(year)=>{
    if(year%4==0){
        console.log("number of days in a month is 28");
    }
    else if(year%400==0){
        console.log("number of days in a month is 28");
    }
    else if(year%100==0){
        console.log("number of days in a month is 28");
    }
    else
    {
        console.log("number of days in a month is 29");
    }
    
}


function myfun(a,y){
switch (a) {

       case 1:
        a = 'number of days in a month is 31';
        break;
       case 2:
       if(x(y)){
        a = 'number of days in a month is 28 if it is leap year then  29';
       }
        break;
       case 3:
        a = ' number of days in a month is 31';
        break;
       case 4:
        a = ' number of days in a month is 30';
        break;
       case 5:
        a = ' number of days in a month is 31';
        break;
       case 6:
        a = ' number of days in a month is 30';
       break;
       case 7:
        a = ' number of days in a month is 31';
        break;
       case 8:
        a = ' number of days in a month is 31';
        break;
       case 9:
        a = ' number of days in a month is 30';
        break;
       case 10:
        a = ' number of days in a month is 31';
        break;
       case 11:
        a = ' number of days in a month is 30';
        console.log(a)
        break;
       case 12:
        a = ' number of days in a month is 31';
        break;
        default:
        a = "Invalid month";
}
}

myfun(2,2017)