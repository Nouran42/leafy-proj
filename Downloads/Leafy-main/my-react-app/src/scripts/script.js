let index = 0;
for (let i of products.data) {
    
    
    let card = document.createElement("div");
    card.classList.add("card", i.category,"hide","fade-in");
    card.setAttribute("data-id", i.id);
    
    let link = document.createElement("a");
    const hrefValue = `${i.productName.toLowerCase().replace(/\s+/g, '-')}.html`;
    link.setAttribute("href",hrefValue);
    console.log("Generated href:", hrefValue); 
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", `../../images/${i.image}`);
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
    let buttonText = button.innerText.toLowerCase().replace(/\s/g, '');
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
    if(value=="allproducts"){
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
    filterProduct("allproducts");
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


document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product');
  
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        window.location.href = `product-details.html?product=${productId}`;
      });
    });
  });





  

 