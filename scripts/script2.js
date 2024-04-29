let products={
    data:[
        {
            productName:"Cherry Tomato Seeds",
            category:"Fruitseeds",
            price:"70",
            image:"cherrytomatoseeds.jpg"

        },
        {
            productName:"Tomato Seeds",
            category:"Fruitseeds",
            price:"50",
            image:"tomatoseeds.jpg"
        },
        {
            productName:"Cantaloupe Seeds",
            category:"Fruitseeds",
            price:"80",
            image:"cantaloupeseeds.jpg"
        },
        {
            productName:"Strawberry Seeds",
            category:"Fruitseeds",
            price:"40",
            image:"strawberryseeds.jpg"
        },
        {
            productName:"Cucumber Seeds",
            category:"Vegetableseeds",
            price:"60",
            image:"cucumberseeds.jpg"
        },
        {
            productName:"Celery Seeds",
            category:"Vegetableseeds",
            price:"40",
            image:"celeryseeds.jpg"
        },
        {
            productName:"Eggplant Seeds",
            category:"Vegetableseeds",
            price:"45",
            image:"eggplantseeds.jpg"
        },
        {
            productName:"Lettuce Seeds",
            category:"Vegetableseeds",
            price:"45",
            image:"lettuceseeds.jpg"
        },
        {
            productName:"Zucchini Seeds",
            category:"Vegetableseeds",
            price:"60",
            image:"zucchiniseeds.jpg"
        },
        {
            productName:"Carrot Seeds",
            category:"Vegetableseeds",
            price:"65",
            image:"carrotseeds.jpg"
        },
        {
            productName:"Basil Seeds",
            category:"Herbseeds",
            price:"65",
            image:"basilseeds.jpg"
        },
        {
            productName:"Chives Seeds",
            category:"Herbseeds",
            price:"80",
            image:"chiveseeds.jpg"
        },
        {
            productName:"Dill Seeds",
            category:"Herbseeds",
            price:"65",
            image:"dillseeds.jpg"
        },
        {
            productName:"Parsley Seeds",
            category:"Herbseeds",
            price:"25",
            image:"Parsleyseeds.jpg"
        },
        {
            productName:"Thyme Seeds",
            category:"Herbseeds",
            price:"60",
            image:"thymeseeds.jpg"
        }
    ]
    
};

let index = 0;
for (let i of products.data) {
    
    
    let card = document.createElement("div");
    card.classList.add("card", i.category,"hide");
    
   let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
   let image = document.createElement("img");
    image.setAttribute("src", `../../images/${i.image}`);
    image.classList.add("card-img-top", `seedimg${index + 1}`);
    image.alt = "seedimg";
    
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "mt-4");
    
    let title = document.createElement("h5");
    title.classList.add("card-title", "product-name");
    title.textContent = i.productName.toUpperCase();
    
    let price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = `EGP ${i.price}.00`;
    
    cardBody.appendChild(title);
    cardBody.appendChild(price);
    imgContainer.appendChild(image);
    imgContainer.appendChild(cardBody);
    card.appendChild(imgContainer);
    
    document.getElementById("products").appendChild(card);
    index++;
}

function filterProduct(value)
{
    let mainTitle=document.getElementById("main-title");
   let buttons=document.querySelectorAll(".button-value");
   buttons.forEach((button) =>{
    if(value.toUpperCase()==button.innerText.toUpperCase().replace(/\s/g,'')){
        button.classList.add("active");
        mainTitle.innerText=button.innerText.toUpperCase();

    }
    else{
        button.classList.remove("active");
    }
   });
   let elements=document.querySelectorAll(".card");
   elements.forEach((element=>{
    if(value=="allseeds"){
         element.classList.remove("hide");
    }
    else{
        if (element.classList.contains(value)) {
            element.classList.remove("hide");
          
            
        } else {
            element.classList.add("hide");
        }
       
    }
   }));
}

window.onload=()=>{
    filterProduct("allseeds");
}



document.getElementById("search").addEventListener("click",()=>{
    let searchInput=document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");
    console.log(searchInput);

    elements.forEach((element,index)=>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");

        }
    })

});




