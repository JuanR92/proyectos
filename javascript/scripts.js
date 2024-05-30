// scripts.js

// Function to fetch and display products
async function loadProducts() {
    const response = await fetch('/json/products.json');
    const data = await response.json();
    const products = data.products;
    const productsContainer = document.getElementById('products-container');

    if (productsContainer) {
        productsContainer.innerHTML = products.map(product => `
            <div class="product">
                <h3>${product.name}</h3>
                <p><strong>Platform:</strong> ${product.platform}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p>${product.description}</p>
                <img src="${product.image}" alt="${product.name}">
            </div>
        `).join('');
    }
}

// Interact with form data
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
}

// Interact with JSON data and plot it
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    const jsonData = [
        { game: 'Super Mario', sales: 5000000 },
        { game: 'Sonic the Hedgehog', sales: 3000000 },
        { game: 'The Legend of Zelda', sales: 4000000 }
    ];

    const chartContainer = document.getElementById('chart-container');
    if (chartContainer) {
        const chart = document.createElement('div');
        chart.innerHTML = jsonData.map(item => `
            <div>
                <strong>${item.game}</strong>: ${item.sales} units sold
            </div>
        `).join('');
        chartContainer.appendChild(chart);
    }
});

// Attach form submission handler
document.querySelector('form').addEventListener('submit', handleFormSubmission);
