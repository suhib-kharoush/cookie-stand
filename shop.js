'use strict';

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



let seattle = {
    locationName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calcCustomersEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },

    calcCookiesEachHour: function () {
        for (let i = 0; i < workingHours.length; i++) {

            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

            this.total += this.cookiesEachHour[i]
        }
    },
    render: function () {
    
        let parent = document.getElementById('parent');
        console.log(parent);

        let shopName = document.createElement('h3');

        parent.appendChild(shopName);

 
        shopName.textContent = this.locationName;


        let unorderedList = document.createElement('ul');
 
        parent.appendChild(unorderedList);


        for (let i = 0; i < workingHours.length; i++) {
   
            let listItem = document.createElement('li');

            unorderedList.appendChild(listItem);

            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHour[i]} cookies`
        }


        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent = `total: ${this.total} cookies`;

    }

}


seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();
console.log(seattle);


// second shop


let secondShop = {
    locationName: 'Tokyo',
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


        shopName.textContent = this.locationName;

  
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
secondShop.render();
console.log(secondShop);


// third shop:

let thirdShop = {
    locationName: 'Dubai',
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


        shopName.textContent = this.locationName;


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
thirdShop.render();
console.log(thirdShop);


// fourth shop:

let fourthShop = {
    locationName: 'Paris',
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

   
        shopName.textContent = this.locationName;

    
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
fourthShop.render();
console.log(fourthShop);

// fifth shop:

let fifthShop = {
    locationName: 'Lima',
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
    
       
            shopName.textContent = this.locationName;
    
    
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