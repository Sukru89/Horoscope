let day= Number(prompt("please enter the day of your birthdate"));
let month= Number(prompt("please enter the month of your birthdate"));

if((month=== 3 &&  day>=21) || (month=== 4 && day<=20)){
    alert("Your Horoscope is Aries");
}else if((month=== 4 &&  day>20) || (month=== 5 && day<=21)){
    alert("Your Horoscope is Taurus");
}else if((month=== 5 &&  day>21) || (month=== 6 && day<=21)){
    alert("Your Horoscope is Gemine");
}else if((month=== 6 &&  day>21) || (month=== 7 && day<=22)){
    alert("Your Horoscope is Cancer");
}else if((month=== 7 &&  day>22) || (month=== 8 && day<=21)){
    alert("Your Horoscope is Leo");
}else if((month=== 8 &&  day>21) || (month=== 9 && day<=23)){
    alert("Your Horoscope is Virgo");
}else if((month=== 9 &&  day>23) || (month=== 10 && day<=23)){
    alert("Your Horoscope is Libra");
}else if((month=== 10 &&  day>23) || (month=== 11 && day<=22)){
    alert("Your Horoscope is Scorpio");
}else if((month=== 11 &&  day>22) || (month=== 12 && day<=22)){
    alert("Your Horoscope is Sagittarius");
}else if((month=== 12 &&  day>22) || (month=== 1 && day<=20)){
    alert("Your Horoscope is Capricorn");
}else if((month=== 1 &&  day>20) || (month=== 2 && day<=19)){
    alert("Your Horoscope is Aquarius");
} else if((month=== 2 &&  day>19) || (month=== 3 && day<=20)){
    alert("Your Horoscope is Pisces");
} 
else{
    alert("Please enter an existent date")
}