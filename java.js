/* ALERT EXERCISE, slide 16
console.log(alert('Georgia'));

/* VARIABLES EXERCISE, slide 26
let surname = 'Rudolph';
var name = 'Georgia';
const birthday = '13 January';

console.log(surname, name, birthday)

surname = 'Gary';
name = 'Harriet';
birthday = '12 July';

console.log(surname, name, birthday);*/

// INCREMENT & DECREMENT EXERCISE, slide 35
/*let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a, b, c, d);

let a = 2;
let x = 1 + (a*=2);
console.log(a, x);*/

//FAHRENHEIT-CELSIUS EXERCISE, slide 40

//OPTION 1 
/*let userFahrenheit = prompt("Enter temperature in fahrenheit: ") 
let celsius = (userFahrenheit - 32) * (5/9);
console.log(Math.floor(celsius));
let userCelsius = prompt("Enter temperature in celsius: ")
let fahrenheit = userCelsius / (5/9) + 32;
console.log(Math.floor(fahrenheit));*/

//OPTION 2
/*let userTemperature = prompt("Enter a temperature: ")
let tempUnit = prompt("Enter the unit of temperature (Celsius or Fahrenheit: ")
if (tempUnit === 'celsius') {
    let celsius = Math.floor(userTemperature - 32 * (5/9));
    console.log('The temperature in degrees celsius is: ' + celsius)
}
else {
    let fahrenheit = Math.floor(userTemperature / (5/9) + 32);
    console.log('The temperature in degrees fahrenheit is: ' + fahrenheit)
};*/






