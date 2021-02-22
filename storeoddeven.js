// HOME LEARNING EXERCISE 1, SLIDE 21

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

// HOME LEARNING EXERCISE 2, SLIDE 22

/*const stockList = ['apples', 'mushrooms', 'bread', 'butter', 'flour', 'pasta', 'cheese', 'fish', 'pizza', 'bananas', 'chocolate']

let customerQuery = prompt('Enter the item you are searching for: ','');

function stockChecker(item) {
    let status = false;
    for (let i = 0; i < stockList.length; i++) {
        if (item == stockList[i]) {
                status = true;
                alert(`That item (${item}) is currently in stock`);
                break;
            }
            else continue}
        if (status == false) {
            alert(`That item (${item}) is not currently in stock.`);
            let order = prompt('Would you like to order that in?');
            if (order == 'yes') {
                stockList.push(item);
                alert('Item ordered. Full list of stock: ' + stockList.join(", "));
            }
            else {
                alert('Thank you for visiting.')
            }
        }
}

stockChecker(customerQuery)*/