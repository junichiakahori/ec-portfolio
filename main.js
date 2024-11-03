function addToCart(productId) {
    // 商品情報（例としてハードコードしていますが、実際は商品情報を使います）
    const product = {
        id: productId,
        name: `Product ${productId}`,
        price: 10.00
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} has been added to your cart!`);
    updateCartDisplay();
}
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.innerHTML = ''; // 表示をリセット
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert('Cart has been cleared.');
}
