'use strict';

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let shopArray = [];
function Shop(location, min, max, avgCookies) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.total = 0;
    shopArray.push(this)
    console.log(this)
}

Shop.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < workingHours.length; i++) {
        this.customersPerHour.push(random(this.min, this.max));
    }
}
Shop.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < workingHours.length; i++) {

        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookies));

        this.total += this.cookiesPerHour[i]
    }
}
let firstShop = new Shop('Seattle', 23, 65, 2.3)
let secondShop = new Shop('Tokyo', 3, 24, 1.2)
let thirdShop = new Shop('Dubai', 11, 38, 3.7)
let fourthShop = new Shop('Paris', 20, 38, 2.3);
let fifthShop = new Shop('Lima', 2, 16, 4.6);

firstShop.calcCustomersEachHour();
firstShop.calcCookiesEachHour();

secondShop.calcCustomersEachHour();
secondShop.calcCookiesEachHour();

thirdShop.calcCustomersEachHour();
thirdShop.calcCookiesEachHour();

fourthShop.calcCustomersEachHour();
fourthShop.calcCookiesEachHour();

fifthShop.calcCustomersEachHour();
fifthShop.calcCookiesEachHour();




// let TableCreator = {


//     renderTable: function () {
//         //get div
//         let containerDiv = document.getElementById('container');
//         //create table element
//         let tableElement = document.createElement("table");


//         // Header row
//         let headerRow = document.createElement('tr');

//         let nameCell = document.createElement("th");
//         nameCell.innerHTML = "Shop name";
//         nameCell.style.border = " 1px solid black";
//         headerRow.appendChild(nameCell);


//         for (var i = 0; i < workingHours.length; i++) {
//             // "NORMAL" CELL
//             let headerCell = document.createElement("th");
//             headerCell.innerHTML = workingHours[i];
//             headerCell.style.border = " 1px solid black";
//             headerRow.appendChild(headerCell);
//         }
//         let totalCell = document.createElement("th");
//         totalCell.innerHTML = "total";
//         totalCell.style.border = " 1px solid black";

//         headerRow.appendChild(totalCell);

//         tableElement.appendChild(headerRow);
//         // End header
//         debugger;

//         shopArray.forEach(shop => {
//             tableElement.appendChild(createShopRow(shop));
//         });
// tableElement.appendChild*
//         containerDiv.appendChild(tableElement);
//     }
// }

// TableCreator.renderTable();

// function createShopRow(shop) {

//     let shopRow = document.createElement("tr");

//     let nameColumn = document.createElement("td");
//     nameColumn.innerHTML = shop.location;
//     nameColumn.style.border = " 1px solid black";
//     shopRow.appendChild(nameColumn);

//     for (var i = 0; i < workingHours.length; i++) {
//         // "NORMAL" CELL
//         let column = document.createElement("td");
//         column.innerHTML = shop.cookiesPerHour[i];
//         column.style.border = " 1px solid black";
//         shopRow.appendChild(column);
//     }

//     let totalColumn = document.createElement("td");
//     totalColumn.innerHTML = shop.total;
//     totalColumn.style.border = " 1px solid black";
//     shopRow.appendChild(totalColumn);
//     return shopRow;
// }

// function createSumRow() {

//     let sumRow = document.createElement("tr");

//     let sumColumn = document.createElement("td");
//     sumColumn.innerHTML = "summation";
//     sumColumn.style.border = " 1px solid black";
//     sumRow.appendChild(sumColumn);

//     for (var i = 0; i < workingHours.length; i++) {
//         // "NORMAL" CELL
//         let sum = 0;
//         shopArray.forEach(shop => {
//             sum += shop.cookiesPerHour[i];
//         });

//         let column = document.createElement("td");
//         column.innerHTML = sum;
//         column.style.border = " 1px solid black";
//         shopRow.appendChild(column);
//     }

//     let totalSum = 0;
//     shopArray.forEach(shop => {
//         totalSum += shop.total;
//     });


//     let totalColumn = document.createElement("td");
//     totalColumn.innerHTML = totalSum;
//     totalColumn.style.border = " 1px solid black";
//     sumRow.appendChild(totalColumn);
//     return sumRow;
// }



let parent = document.getElementById('parent');
console.log(parent)

let table = document.createElement('table');

parent.appendChild(table);


function makeHeader() {
    let header = document.createElement('tr');
    table.appendChild(header);

    let firstTh = document.createElement('th');
    firstTh.textContent = 'Shop location';
    header.appendChild(firstTh);


for(let i = 0; i < workingHours.length; i++){
    let thElement = document.createElement('th');
    header.appendChild(thElement);
    thElement.textContent=workingHours[i]
}

let dailyTotal = document.createElement('th');
dailyTotal.textContent= 'Daily totals'
header.appendChild(dailyTotal)

   
}

Shop.prototype.render=function(){
   let data = document.createElement('tr');
   table.appendChild(data);


   let names = document.createElement('td');
   data.appendChild(names);
   names.textContent = this.location;

   for(let i=0; i<workingHours.length; i++){
       let tdElement = document.createElement('td');
       tdElement.textContent = this.cookiesPerHour[i]
       data.appendChild(tdElement)
   }

   let totalDay = document.createElement('td');

   data.appendChild(totalDay);
   totalDay.textContent = this.total

}

let totalOfTotal = function(){
    let totalRow = document.createElement('tr');
    table.appendChild(totalRow);

    let totals = document.createElement('th');
    totalRow.appendChild(totals);
    totals.textContent='Totals'



let totalOfAll=0;   

for(let i=0; i < workingHours.length; i++){
     
    let totPerHour=0;

    for(let j=0; j<shopArray.length; j++){
        totPerHour+=shopArray[j].cookiesPerHour[i]
        totalOfAll+=shopArray[j].cookiesPerHour[i]
    }

    totals=document.createElement('th');
    totalRow.appendChild(totals);
    totals.textContent=totPerHour;
}

let summation =document.createElement('th');
totalRow.appendChild(summation);
summation.textContent=totalOfAll

}



makeHeader();





for (let i = 0; i < shopArray.length; i++) {
    shopArray[i].calcCustomersEachHour();
    shopArray[i].calcCustomersEachHour();
    shopArray[i].render();
}

totalOfTotal();