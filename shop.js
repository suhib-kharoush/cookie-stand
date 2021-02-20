'use strict';

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// first shop
let firstShop = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calcCustomersEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customersPerHour.push(random(this.min, this.max));
        }
    },

    calcCookiesEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookies));

            this.total += this.cookiesPerHour[i]
        }
    },
    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let shopName = document.createElement('h3');

        parent.appendChild(shopName);


        shopName.textContent = this.location;


        let unorderedList = document.createElement('ul');

        parent.appendChild(unorderedList);


        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;

    }

}


firstShop.calcCustomersEachHour();
firstShop.calcCookiesEachHour();
// firstShop.render();

// second shop


let secondShop = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    cusPerHour: [],
    cookiesPerHour: [],
    total: 0,


    getcusPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cusPerHour.push(random(this.min, this.max));
        }
    },

    getcookiesPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookies));

            this.total += this.cookiesPerHour[i]
        }
    },
    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let shopName = document.createElement('h3');

        parent.appendChild(shopName);


        shopName.textContent = this.location;


        let unorderedList = document.createElement('ul');

        parent.appendChild(unorderedList);


        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;

    }

}


secondShop.getcusPerHour();
secondShop.getcookiesPerHour();
// secondShop.render();



// third shop:

let thirdShop = {
    location: 'Dubai',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    cusPerHour: [],
    cookiesPerHour: [],
    total: 0,

    getcusPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cusPerHour.push(random(this.min, this.max));
        }
    },

    getcookiesPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookies));

            this.total += this.cookiesPerHour[i]
        }
    },
    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let shopName = document.createElement('h3');

        parent.appendChild(shopName);


        shopName.textContent = this.location;


        let unorderedList = document.createElement('ul');

        parent.appendChild(unorderedList);


        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }

        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;

    }

}

thirdShop.getcusPerHour();
thirdShop.getcookiesPerHour();
// thirdShop.render();



// fourth shop:

let fourthShop = {
    location: 'Paris',
    min: 20,
    max: 38,
    avgCookies: 2.3,
    cusPerHour: [],
    cookiesPerHour: [],
    total: 0,


    getcusPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cusPerHour.push(random(this.min, this.max));
        }
    },

    getcookiesPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookies));

            this.total += this.cookiesPerHour[i]
        }
    },
    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let shopName = document.createElement('h3');

        parent.appendChild(shopName);


        shopName.textContent = this.location;


        let unorderedList = document.createElement('ul');

        parent.appendChild(unorderedList);


        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;

    }

}

fourthShop.getcusPerHour();
fourthShop.getcookiesPerHour();
// fourthShop.render();


// fifth shop:

let fifthShop = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookies: 4.6,
    cusPerHour: [],
    cookiesPerHour: [],
    total: 0,

    getcusPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cusPerHour.push(random(this.min, this.max));
        }
    },

    getcookiesPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookies));

            this.total += this.cookiesPerHour[i]
        }
    },
    render: function () {

        let parent = document.getElementById('parent');
        console.log(parent);

        let shopName = document.createElement('h3');

        parent.appendChild(shopName);


        shopName.textContent = this.location;


        let unorderedList = document.createElement('ul');

        parent.appendChild(unorderedList);


        for (let i = 0; i < workingHours.length; i++) {

            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;

    }

}

fifthShop.getcusPerHour();
fifthShop.getcookiesPerHour();
// fifthShop.render();


let shopArray = [firstShop, secondShop, thirdShop, fourthShop, fifthShop];
let TableCreator = {

    renderTable: function () {
        //get div
        let containerDiv = document.getElementById('container');
        //create table element
        console.log(containerDiv)
        let tableElement = document.createElement("table");
        let tableHeader = document.createElement("thead");

        // Header row
        let headerRow = document.createElement('tr');

        let nameCell = document.createElement("th");
        nameCell.innerHTML = "Shop name";
        headerRow.appendChild(nameCell);



        for (var i = 0; i < workingHours.length; i++) {
            // "NORMAL" CELL
            let headerCell = document.createElement("th");
            headerCell.innerHTML = workingHours[i];
            headerRow.appendChild(headerCell);
        }
        //Total cell
        let totalCell = document.createElement("th");
        totalCell.innerHTML = "Total";
        headerRow.appendChild(totalCell);
        tableHeader.appendChild(headerRow);
        tableElement.appendChild(tableHeader);


        let tableBody = document.createElement("tbody");

        // End header

        shopArray.forEach(shop => {
            tableBody.appendChild(createShopRow(shop));
        });
        tableBody.appendChild(createSumRow());
        tableElement.appendChild(tableBody);

        tableElement.classList.add("styled-table");

        containerDiv.appendChild(tableElement);
    }
}

TableCreator.renderTable();

function createShopRow(shop) {

    let shopRow = document.createElement("tr");

    let nameColumn = document.createElement("td");
    nameColumn.innerHTML = shop.location;

    shopRow.appendChild(nameColumn);

    for (var i = 0; i < workingHours.length; i++) {
        // "NORMAL" CELL
        let column = document.createElement("td");
        column.innerHTML = shop.cookiesPerHour[i];
        shopRow.appendChild(column);
    }

    let totalColumn = document.createElement("td");
    totalColumn.innerHTML = shop.total;
    shopRow.appendChild(totalColumn);
    return shopRow;
}

function createSumRow() {

    let sumRow = document.createElement("tr");

    let sumColumn = document.createElement("td");
    sumColumn.innerHTML = "Summation";

    sumRow.appendChild(sumColumn);

    for (var i = 0; i < workingHours.length; i++) {
        // "NORMAL" CELL
        let sum = 0;
        shopArray.forEach(shop => {
            sum += shop.cookiesPerHour[i];
        });

        let column = document.createElement("td");
        column.innerHTML = sum;
        sumRow.appendChild(column);
    }

    let totalSum = 0;
    shopArray.forEach(shop => {
        totalSum += shop.total;
    });


    let totalColumn = document.createElement("td");
    totalColumn.innerHTML = totalSum;
    sumRow.appendChild(totalColumn);
    return sumRow;
}


// let salesData = document.getElementById('salesData');
// salesData.addEventListener('submit' ,submitter)

// function submitter(event)
// {
//     event.preventDefault();
//     location.innerHTML =''

//     let userShop = event.target.location.value;
//     console.log(userShop);
//     let minimum = event.target.min.value;
//     let maximum = event.target.max.value;
//     let average = event.target.avg.value;

// }
let salesData = document.getElementById('salesData');

salesData.addEventListener('submit',submitter);
function submitter(event){
  event.preventDefault();
  tableElement.innerHTML=''

let newShop =event.target.name.value.required;
let min = event.target.min.value.required;
let max = event.target.max.value.required;
let avg = event.target.avg.value.required;

let salesData = new Shop(newShop, min,max,avg)
salesData.calcCustomersEachHour();
salesData.calcCookiesEachHour();
createShopRow();
// fourthShop.render();
totalCell();

}
// var addcity = document.getElementById('salesData');

// addcity.addEventListener('submit',adding);
// function adding(event){
//   event.preventDefault();
//   table.innerHTML=''

//  var newname =event.target.name.value. required;
//  var min = event.target.minnumber.value;
//  var max = event.target.maxnumber.value;
//  var avg = event.target.avgnumber.value;

// var addedcity = new Shop(newname, min,max,avg)
// addedcity.getCustomer();
// addedcity.getCookies();
// Header();
// Seattle.Suhib();
// Footer();

// }
