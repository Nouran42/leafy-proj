let products={
    data:[
        {
            productName:"Clay Peppels",
            category:"soil",
            price:"70",
            image:"claypeppels.jpg"

        },
        {
            productName:"Coco Peat",
            category:"soil",
            price:"50",
            image:"cocopeat.jpg"
        },
        {
            productName:"Perlite",
            category:"soil",
            price:"80",
            image:"perlite.jpg"
        },
        {
            productName:"Potting Soil",
            category:"soil",
            price:"40",
            image:"pottingsoil.jpg"
        },
        {
            productName:"Seed Starting Mix",
            category:"soil",
            price:"60",
            image:"seedstartingmix.jpg"
        },
        {
            productName:"Vermiculite",
            category:"soil",
            price:"40",
            image:"vermiculite.jpg"
        },
        {
            productName:"9 Way Spray Nozzle",
            category:"toolsandequipment",
            price:"250",
            image:"9wayspraynozzle.jpg"
        },
        {
            productName:"Graden Fork",
            category:"toolsandequipment",
            price:"145",
            image:"gardenfork.jpg"
        },
        {
            productName:"Garden Hand Trowel",
            category:"toolsandequipment",
            price:"100",
            image:"gardenhandtrowel.jpg"
        },
        {
            productName:"Garden Hat",
            category:"toolsandequipment",
            price:"165",
            image:"gardenhat.jpg"
        },
        {
            productName:"Gardening Gloves",
            category:"toolsandequipment",
            price:"85",
            image:"gardeninggloves.jpg"
        },
        {
            productName:"Plant Stake",
            category:"toolsandequipment",
            price:"70",
            image:"plantstake.jpg"
        },
        {
            productName:"Pruning Shears",
            category:"toolsandequipment",
            price:"200",
            image:"pruningshears.jpg"
        },
        {
            productName:"Wheel Barrow",
            category:"toolsandequipment",
            price:"1400",
            image:"wheelbarrow.jpg"
        },
       
    ]
    
};

let index = 0;
for (let i of products.data) {
    
     
    let card = document.createElement("div");
    card.classList.add("card", i.category,"hide","fade-in");

    let link = document.createElement("a");
    link.setAttribute("href", "#");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", `../../images/${i.image}`);
    image.classList.add("card-img-top", `soilimg${index + 1}`);
    image.alt = "product img";

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
    link.appendChild(imgContainer);
    card.appendChild(link);

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
    if(value=="allgardensupplies"){
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
    filterProduct("allgardensupplies");
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




