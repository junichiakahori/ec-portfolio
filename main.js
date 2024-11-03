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
