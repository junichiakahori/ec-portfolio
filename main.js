fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.getElementById('product-list');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    });

function addToCart(productId) {
    alert(`Product ${productId} has been added to your cart!`);
    // カート機能の実装を追加可能
}
