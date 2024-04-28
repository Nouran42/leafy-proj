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
            category: "houseplants",
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
            category: "shadedareaplants airpurifyingplants",
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


for (let i = 0; i < products.data.length; i++) {
    let card = document.createElement("div");
    card.classList.add("col"); 
   
   // card.id = products.data[i].category;
    
    card.innerHTML = `
        <div class="card h-100 hide ${products.data[i].category}" >
            <a href="">
                <img src="../../../images/${products.data[i].image}" class="card-img-top productimg${i + 1}" alt="...">
                <div class="card-body mt-4">
                    <h5 class="card-title product-name">${products.data[i].productName.toUpperCase()}</h5>
                    <p class="card-text">EGP ${products.data[i].price}.00</p>
                </div>
            </a>
        </div>
    `;
  
    document.getElementById("products").appendChild(card);
}

function filterProduct(value)
{
   let buttons=document.querySelectorAll(".button-value");
   buttons.forEach((button) =>{
    if(value.toUpperCase()==button.innerText.toUpperCase().replace(/\s/g,'')){
        button.classList.add("active");
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
            element.style.display="block";
            
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

})