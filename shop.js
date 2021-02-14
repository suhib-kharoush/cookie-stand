'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am,', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// first shop
let firstShop = {
    location: 'Seattle',
    min: 23,
    max: 65,
    cookiesAvg: 6.3,
    totalCookies: 0
    cusPerHour: [],
    AvgSale: [],

    getcusPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cusPerHour[i] = randomAge(this.min, this.max);

            this.getcusPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));


            console.log(this.cusPerHour);
        }

    },

    getAvgSale: function () {
        for (let i = 0; i <= workingHours.length; i++) {
            this.cusPerHour[i] = randomAge(this.min, this.max);
            this.AvgSale.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
            console.log(this.AvgSale);
        }


    },
}
firstShop.getAvgSale()
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

firstShop.getcusPerHour();
firstShop.getAvgSale();
console.log(getcusPerHour, getAvgSale);

// Second shop
let secondShop = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    cookiesAvg: 1.2,
    cusPerHour: [],
    AvgSale: [],
    getcusPerHour: function () {
        for (let i = 0; i <= workingHours.length; i++) {
            this.cusPerHour[i] = randomAge(this.min, this.max);
            workingHours.push
            console.log(this.cusPerHour);
        }

    },
    getAvgSale: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.AvgSale[i] = this.cusPerHour[i] * this.cookiesAvg;
            console.log(this.AvgSale);
        }

    },

}
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
secondShop.getcusPerHour();
secondShop.getAvgSale();
console.log(getcusPerHour, getAvgSale);

// third shop
let thirdShop = {
    location: 'Dubai',
    min: 11,
    max: 38,
    cookiesAvg: 3.7,
    cusPerHour: [],
    AvgSale: [],
    getcusPerHour: function () {
        for (let i = 0; i <= workingHours.length; i++) {
            this.cusPerHour[i] = randomAge(this.min, this.max);
            workingHours.push
            console.log(this.cusPerHour);
        }

    },
    getAvgSale: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.AvgSale[i] = this.cusPerHour[i] * this.cookiesAvg;
            console.log(this.AvgSale);
        }

    },

}
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
thirdShop.getcusPerHour();
thirdShop.getAvgSale();
console.log(getcusPerHour, getAvgSale);

// fourth shop
let fourthdShop = {
    location: 'Paris',
    min: 20,
    max: 38,
    cookiesAvg: 2.3,
    cusPerHour: [],
    AvgSale: [],
    getcusPerHour: function () {
        for (let i = 0; i <= workingHours.length; i++) {
            this.cusPerHour[i] = randomAge(this.min, this.max);
            workingHours.push
            console.log(this.cusPerHour);
        }

    },
    getAvgSale: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.AvgSale[i] = this.cusPerHour[i] * this.cookiesAvg;
            console.log(this.AvgSale);
        }

    },

}
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
fourthShop.getcusPerHour();
fourthShop.getAvgSale();
console.log(getcusPerHour, getAvgSale);

// fifth shop
let fifthShop = {
    location: 'Lima',
    min: 2,
    max: 16,
    cookiesAvg: 4.6,
    cusPerHour: [],
    AvgSale: [],
    getcusPerHour: function () {
        for (let i = 0; i <= workingHours.length; i++) {
            this.cusPerHour[i] = randomAge(this.min, this.max);
            workingHours.push
            console.log(this.cusPerHour);
        }

    },
    getAvgSale: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.AvgSale[i] = this.cusPerHour[i] * this.cookiesAvg;
            console.log(this.AvgSale);
        }

    },

}
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
fifthShop.getcusPerHour();
fifthShop.getAvgSale();
console.log(getcusPerHour, getAvgSale);