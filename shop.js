'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am,', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// first shop
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let firstShop = {
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

        }

    },

 


}

firstShop.getcusPerHour();
firstShop.getAvgSale();


// // Second shop
let secondShop = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    cookiesAvg: 1.2,
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


        }secondShop.gettotalCookies();


    }, 

    gettotalCookies: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.totalCookies = this.totalCookies + this.AvgSale[i];

        }
    },


}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

secondShop.getcusPerHour();
secondShop.getAvgSale();

// // // third shop
let thirdShop = {
    location: 'Dubai',
    min: 11,
    max: 38,
    cookiesAvg: 3.7,
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


        }thirdShop.gettotalCookies();


    }, 

    gettotalCookies: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.totalCookies = this.totalCookies + this.AvgSale[i];

        }
    },

    render:function(){
       
        let parent= document.getElementById('parent');
        console.log(parent);
        
        
        let shopName = document.createElement('h3');
        
        parent.appendChild(shopName);
        
       
        shopName.textContent = this.locationName;
     
        let unorderedList=document.createElement('ul');
      
        parent.appendChild(unorderedList);
         
    
        for(let i =0;i<workingHours.length;i++){
        
          let listItem=document.createElement('li');
         
          unorderedList.appendChild(listItem);
         
          listItem.textContent = `${workingHours[i]}: ${this.cusPerHour[i]} cookies`
        }
    
    
        let totalItem = document.createElement('li');
    
        unorderedList.appendChild(totalItem);
    
        totalItem.textContent=`total: ${this.total} cookies`;
        
      }
}
thirdShop.getcusPerHour();
thirdShop.getAvgSale();
thirdShop.gettotalCookies();
thirdShop.render();
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

thirdShop.getcusPerHour();
thirdShop.getAvgSale();
// // // fourth shop
let fourthShop = {
    location: 'Paris',
    min: 20,
    max: 38,
    cookiesAvg: 2.3,
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


        }fourthShop.gettotalCookies();


    }, 

    gettotalCookies: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.totalCookies = this.totalCookies + this.AvgSale[i];

        }
    },


}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

fourthShop.getcusPerHour();
fourthShop.getAvgSale();


// // // fifth shop
let fifthShop = {
    location: 'Lima',
    min: 2,
    max: 16,
    cookiesAvg: 4.6,
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


        }fifthShop.gettotalCookies();


    }, 

    gettotalCookies: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.totalCookies = this.totawlCookies + this.AvgSale[i];

             e.log(this.gettotalCookies);
        }
    },


}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

<<<<<<< HEAD
fifthShop.getcusPerHour();
fifthShop.getAvgSale();
<<<<<<< HEAD
console.log(fifthShop);
=======
// console.log(getcusPerHour, getAvgSale);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function firstShop(location,min,max,cookiesAvg,cusPerHour,AvgSale,totalCookies){
    this.location = location;
    this.min = min;
    this.max = max;
    this.cookiesAvg = cookiesAvg;
    this.cusPerHour = []
    this.AvgSale = []
    this.totalCookies = totalCookies;
}
firstShop.prototype.getcust = function(){
    for (let i = 0; i < workingHours.length; i++){
        let cust = getRandomInt(this.min,this.max);
        this.cusPerHour.push(cust);
    }
};

firstShop.prototype.getCookies = function(){
    for(let i = 0; i < workingHours.length; i++){
        this.AvgSale.push(Math.floor(this.cusPerHour[i]*this.cookiesAvg));

    }
};

// firstShop.prototype.

let parent = document.getElementById('tableContent');
console.log(parent);
>>>>>>> constructo-function
=======
>>>>>>> class06-Objects
