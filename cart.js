let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}
