let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

    let filter = searchInput.value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let title = product.querySelector("h3")
        .innerText.toLowerCase();

        if(title.includes(filter)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});