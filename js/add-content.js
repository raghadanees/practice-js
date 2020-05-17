var today = new Date();
//this will give me the day, date, hour & year
console.log(today)
//var hourNow = today.getHours();
// will give the hour from labtop
//console.log(hourNow)
var hourNow = prompt ('what time is it 0- 23 ?')
console.log(hourNow)
alert('hello')
var greeting;
console.log(greeting)
// will give undefined

if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
  // output
  // To show output
document.write('<h3>'+greeting+'</h3>');
//it will not work without
document.write('<h2>'+greeting+'</h2>')





if(2>3) // T or F
{
    console.log('yes yes')
}else if (9>8)
    
{
    console.log('yes')

}else 
{
    console.log('what')
} 


