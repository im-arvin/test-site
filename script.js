let cart =
localStorage.getItem("cart") || 0;

document.getElementById("cartCount")
.innerText = cart;

function addToCart(){

cart++;

localStorage.setItem("cart",cart);

document.getElementById("cartCount")
.innerText = cart;

}

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

document
.getElementById("searchInput")
.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let products =
document.querySelectorAll(".product");

products.forEach(product=>{

let title =
product.querySelector("h3")
.innerText
.toLowerCase();

if(title.includes(value))
product.style.display="block";
else
product.style.display="none";

});

});

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("پیام با موفقیت ارسال شد");

});