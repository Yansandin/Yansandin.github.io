
var cartCount = 0;
var cartCountElement = document.getElementById('counter');


function addToCart() {
    cartCount++;
    updateCartCount();
}


function updateCartCount() {
    cartCountElement.innerText = cartCount;
}

var cartIcon = document.getElementById('counter');



