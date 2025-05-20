const sampleProducts = [
  { id: 1, name: "Golden Widget", price: "29.99", imagePlaceholder: "https://via.placeholder.com/150/FFD700/000000?Text=GoldenWidget" },
  { id: 2, name: "Luxury Gear", price: "199.50", imagePlaceholder: "https://via.placeholder.com/150/B8860B/FFFFFF?Text=LuxuryGear" },
  { id: 3, name: "Golden Goblet", price: "75.00", imagePlaceholder: "https://via.placeholder.com/150/FFD700/000000?Text=GoldenGoblet" },
  { id: 4, name: "Sunstone Pendant", price: "120.00", imagePlaceholder: "https://via.placeholder.com/150/DAA520/FFFFFF?Text=SunstonePendant" },
  { id: 5, name: "Amber Amulet", price: "95.00", imagePlaceholder: "https://via.placeholder.com/150/FFBF00/000000?Text=AmberAmulet" }
];

function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        // console.warn('Product grid container not found on this page.');
        return; // Exit if the container isn't on the current page
    }

    productGrid.innerHTML = ''; // Clear existing content

    sampleProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card'); // For styling

        const productImage = document.createElement('img');
        productImage.src = product.imagePlaceholder;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;
        
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.classList.add('add-to-cart-btn'); // For styling and potential future event handling
        // Later: addToCartButton.addEventListener('click', () => addToCart(product.id));

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartButton);

        productGrid.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on a page that should display products
    if (document.getElementById('product-grid')) {
        displayProducts();
    }
});
