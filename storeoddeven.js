/*This program asks a store customer which product they are searching for. The program then iterates through the stocklist to check if that product matches any of the
items in the array (and so is in stock). If the item is not in stock, the program asks the customer if they would like to order it in. If they do, the item is pushed
to the back of the stocklist (array) and the full stocklist is displayed in an alert. If the customer does not wish to order in the item, they receive an alert
thanking them for their visit.*/

const stockList = ['apples', 'mushrooms', 'bread', 'butter', 'flour', 'pasta', 'cheese', 'fish', 'pizza', 'bananas', 'chocolate']

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

stockChecker(customerQuery)
