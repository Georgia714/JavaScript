//This file contains code created to practise Javascript fundamentals.

console.log(alert('Steven'));

/*let surname = 'Rudolph';
var name = 'Steven';
const birthday = '13 January';

console.log(surname, name, birthday)

surname = 'Gary';
name = 'Harriet';
birthday = '12 July';

console.log(surname, name, birthday);*/


/*let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a, b, c, d);

let a = 2;
let x = 1 + (a*=2);
console.log(a, x);*/

//This program iterates through numbers 0-16. It creates an alert for each number, specifying whether it is odd or even.
for (let i = 0; i < 16; i++) {
    if (i === 0) {
      alert('0 is even')
    }
    else { if (i % 2 === 0) {
            alert(i + ' is even');
    } 
        if (i % 2 === 1) {
            alert(i + ' is odd');
    }
}
}



