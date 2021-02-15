'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am,', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// first shop
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const firstShop = {
    location: 'Seattle',
    min: 23,
    max: 65,
    cookiesAvg: 6.3,
    totalCookies: 0,
    cusPerHour: [],
    AvgSale: [],

    getcusPerHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cusPerHour.push(random(this.min, this.max));



        }

    },




    getAvgSale: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.AvgSale.push(Math.floor(this.cusPerHour[i] * this.cookiesAvg));


        } firstShop.gettotalCookies();


    },

    gettotalCookies: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.totalCookies = this.totalCookies + this.AvgSale[i];

            console.log(this.gettotalCookies);
        }

    },

   
// render: function(){
//     let parent = document.getElementById('parent');
//     console.log(parent);
//     let unorderedList = document.createElement('ul');
//     parent.appendChild(unorderedList);

//     let shopName = document.createElement('li');
//     unorderedList.appendChild(shopName);
// }


}

firstShop.getcusPerHour();
firstShop.getAvgSale();
console.log(firstShop);
// console.log(getcusPerHour, getAvgSale);

// // Second shop
// let secondShop = {
//     location: 'Tokyo',
//     min: 3,
//     max: 24,
//     cookiesAvg: 1.2,
//     totalCookies: 0,
//     cusPerHour: [],
//     AvgSale: [],
//     getcusPerHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cusPerHour.push(random(this.min, this.max));



//         }

//     },

//     getAvgSale: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.AvgSale.push(Math.floor(this.cusPerHour[i] * this.cookiesAvg));


//         }secondShop.gettotalCookies();


//     }, 

//     gettotalCookies: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.totalCookies = this.totalCookies + this.AvgSale[i];

//             console.log(this.gettotalCookies);
//         }
//     },


// }

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

// secondShop.getcusPerHour();
// secondShop.getAvgSale();
// console.log(secondShop);

// // // third shop
// let thirdShop = {
//     location: 'Dubai',
//     min: 11,
//     max: 38,
//     cookiesAvg: 3.7,
//     totalCookies: 0,
//     cusPerHour: [],
//     AvgSale: [],
//     getcusPerHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cusPerHour.push(random(this.min, this.max));



//         }

//     },

//     getAvgSale: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.AvgSale.push(Math.floor(this.cusPerHour[i] * this.cookiesAvg));


//         }thirdShop.gettotalCookies();


//     }, 

//     gettotalCookies: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.totalCookies = this.totalCookies + this.AvgSale[i];

//             console.log(this.gettotalCookies);
//         }
//     },


// }

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

// thirdShop.getcusPerHour();
// thirdShop.getAvgSale();
// console.log(thirdShop);
// // // fourth shop
// let fourthShop = {
//     location: 'Paris',
//     min: 20,
//     max: 38,
//     cookiesAvg: 2.3,
//     totalCookies: 0,
//     cusPerHour: [],
//     AvgSale: [],
//     getcusPerHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cusPerHour.push(random(this.min, this.max));



//         }

//     },

//     getAvgSale: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.AvgSale.push(Math.floor(this.cusPerHour[i] * this.cookiesAvg));


//         }fourthShop.gettotalCookies();


//     }, 

//     gettotalCookies: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.totalCookies = this.totalCookies + this.AvgSale[i];

//             console.log(this.gettotalCookies);
//         }
//     },


// }

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

// fourthShop.getcusPerHour();
// fourthShop.getAvgSale();
// console.log(fourthShop);

// // // fifth shop
// let fifthShop = {
//     location: 'Lima',
//     min: 2,
//     max: 16,
//     cookiesAvg: 4.6,
//     totalCookies: 0,
//     cusPerHour: [],
//     AvgSale: [],
//     getcusPerHour: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cusPerHour.push(random(this.min, this.max));



//         }

//     },

//     getAvgSale: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.AvgSale.push(Math.floor(this.cusPerHour[i] * this.cookiesAvg));


//         }fifthShop.gettotalCookies();


//     }, 

//     gettotalCookies: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.totalCookies = this.totalCookies + this.AvgSale[i];

//             console.log(this.gettotalCookies);
//         }
//     },


// }

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

// fifthShop.getcusPerHour();
// fifthShop.getAvgSale();
// console.log(fifthShop);