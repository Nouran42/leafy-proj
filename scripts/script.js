let products = {
    data: [{
            productName: "asian bay berry",
            category: "rareplants",
            price: "230",
            image: "asianbayberry.jpg"
        },
        {
            productName: "yellow elder",
            category: "scentedplants",
            price: "210",
            image: "yellowelder.jpg"
        },
        {
            productName: "nerve plant",
            category: "houseplants",
            price: "220",
            image: "nerveplant.jpg"
        },
        {
            productName: "red star",
            category: "houseplants",
            price: "210",
            image: "redstar.jpg"
        },
        {
            productName: "ficus hawaii",
            category: "airpurifyingplants",
            price: "250",
            image: "ficushawaii.jpg"
        },
        {
            productName: "aloe vera",
            category: "shadedareaplants",
            price: "210",
            image: "aloevera.jpg"
        },
        {
            productName: "warneckii",
            category: "shadedareaplants",
            price: "350",
            image: "warneckii.jpg"
        },
        {
            productName: "song of india",
            category: "houseplants",
            price: "290",
            image: "songofindia.jpg"
        },
        {
            productName: "murraya",
            category: "scentedplants",
            price: "240",
            image: "murraya.jpg"
        },
        {
            productName: "lace fern",
            category: "ferns",
            price: "120",
            image: "lacefern.jpg"
        },
        {
            productName: "snake plant",
            category: "shadedareaplants",
            price: "150",
            image: "snakeplant.jpg"
        },
        {
            productName: "golden pothos",
            category: "airpurifyingplants",
            price: "220",
            image: "goldenpothos.jpg"
        },
        {
            productName: "peace lily",
            category: "scentedplants",
            price: "310",
            image: "peacelily.jpg"
        },
        {
            productName: "montasera adansonii",
            category: "scentedplants",
            price: "450",
            image: "montaseraadansonii.jpg"

        },
        {
            productName: "pothos njoy",
            category: "rareplants",
            price: "265",
            image: "pothosnjoy.jpg"

        },
        {
            productName: "zanzibar gem raven",
            category: "rareplants",
            price: "650",
            image: "zanzibargemraven.jpg"

        },
        {
            productName: "boston fern",
            category: "ferns",
            price: "290",
            image: "bostonfern.jpg"

        },
        {
            productName: "foxtail fern",
            category: "ferns",
            price: "235",
            image: "foxtailfern.jpg"

        },
        {
            productName: "lucky bamboo",
            category: "bamboo",
            price: "120",
            image: "luckybamboo.jpg"
        },
        {
            productName: "bamboo palm",
            category: "bamboo",
            price: "700",
            image: "bamboopalm.jpg"
        },
        {
            productName: "traveller's palm",
            category: "palms",
            price: "675",
            image: "traveller'spalm.jpg"
        },
        {
            productName: "ponytail palm",
            category: "palms",
            price: "410",
            image: "ponytailpalm.jpg"
        },
        {
            productName: "areca palm",
            category: "palms",
            price: "250",
            image: "arecapalm.jpg"
        },
        {
            productName: "bunny ears cactus",
            category: "cacti",
            price: "95",
            image: "bunnyearscactus.jpg"
        },
        {
            productName: "hair brush cactus",
            category: "rareplants",
            price: "100",
            image: "hairbrushcactus.jpg"
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
    image.setAttribute("src", `../../../images/${i.image}`);
    image.classList.add("card-img-top", `productimg${index + 1}`);
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
    if(value=="allplants"){
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
    filterProduct("allplants");
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