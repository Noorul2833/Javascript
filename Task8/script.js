let apiCard = document.querySelector(".apicard");

let count = document.querySelector(".count");

let allBtn = document.querySelector("#all");

let priceBtn = document.querySelector("#price");

let menBtn = document.querySelector("#men");

let searchInput = document.querySelector("#searchInput");

let searchBtn = document.querySelector("#searchBtn");

let lowHighBtn = document.querySelector("#lowHigh");

let highLowBtn = document.querySelector("#highLow");

let categoryButtons = document.querySelector(".categoryButtons");


let products = [];
function displayData(data){

    apiCard.innerHTML = "";

    data.forEach(function(product){

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img src="${product.image}">

            <h3>${product.title}</h3>

            <h4>${product.category}</h4>

            <p>${product.description}</p>

            <h2>$${product.price}</h2>

            <button>View Product</button>

        `;

        apiCard.append(card);

    });

}

fetch("https://fakestoreapi.com/products")

.then(function(response){

    return response.json();

})

.then(function(jsData){

    products = jsData;

let allButton = document.createElement("button");

allButton.innerText = "All";

categoryButtons.append(allButton);

let categories = [];

products.forEach(function(product){

    if(!categories.includes(product.category)){

        categories.push(product.category);

    }

});

categories.forEach(function(category){

    let btn = document.createElement("button");

    btn.innerText = category;

    categoryButtons.append(btn);

    btn.addEventListener("click",function(){

        let filtered = products.filter(function(product){

            return product.category === category;

        });

        displayData(filtered);

    });

});


allButton.addEventListener("click",function(){

    displayData(products);

});


lowHighBtn.addEventListener("click",function(){

    let sorted = [...products];

    sorted.sort(function(a,b){

        return a.price - b.price;

    });

    displayData(sorted);

});

highLowBtn.addEventListener("click",function(){

    let sorted = [...products];

    sorted.sort(function(a,b){

        return b.price - a.price;

    });

    displayData(sorted);

});




    count.innerText = "Total Products : " + products.length;

    displayData(products.slice(0,5));

})

.catch(function(){

    alert("Failed to Load Products");

});

priceBtn.addEventListener("click",function(){

    let filtered = products.filter(function(product){

        return product.price > 50;

    });

    displayData(filtered);

});

menBtn.addEventListener("click",function(){

    let filtered = products.filter(function(product){

        return product.category === "men's clothing";

    });

    displayData(filtered);

});

allBtn.addEventListener("click",function(){

    displayData(products);

});

searchBtn.addEventListener("click", function(){

    let searchText = searchInput.value.toLowerCase();

    let result = products.filter(function(product){

        return product.title.toLowerCase().includes(searchText);

    });

    displayData(result);

});