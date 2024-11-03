// カートに商品を追加する関数
function addToCart(productId) {
    const product = {
        id: productId,
        name: `Product ${productId}`,
        price: 10.00
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} has been added to your cart!`);
}

// カートの内容を表示する関数
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.innerHTML = '';
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

// カートをクリアする関数
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert('Cart has been cleared.');
}

// ページ読み込み時にカート内容を表示
document.addEventListener('DOMContentLoaded', displayCart);
