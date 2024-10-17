const products = [
    { id: 1, name: "mens Designer T-Shirts", image: "product1.jpg", price: 100 },
    { id: 2, name: "mens Designer T-Shirts", image: "product2.jpg", price: 200 },
    { id: 3, name: "mens Designer T-Shirts", image: "product3.jpg", price: 300 },
    { id: 4, name: "mens Designer T-Shirts", image: "product4.jpg", price: 400 },
    { id: 5, name: "mens Designer T-Shirts", image: "product5.jpg", price: 500 },
    { id: 6, name: "mens Designer T-Shirts", image: "product6.jpg", price: 600 },
    { id: 7, name: "mens Designer T-Shirts", image: "product7.jpg", price: 700 },
    { id: 8, name: "mens Designer T-Shirts", image: "product8.jpg", price: 800 },
    { id: 9, name: "mens Designer T-Shirts", image: "product9.jpg", price: 900 },
    { id: 10, name: "mens Designer T-Shirts", image: "product10.jpg", price: 100 },
    { id: 11, name: "mens Designer T-Shirts", image: "product11.jpg", price: 110 },
    { id: 12, name: "mens Designer T-Shirts", image: "product12.jpg", price: 120 },    
    { id: 13, name: "mens Designer T-Shirts3", image: "product13.jpg", price: 130 },
    { id: 14, name: "mens Designer T-Shirts", image: "product14.jpg", price: 140 },
    { id: 15, name: "mens Designer T-Shirts5", image: "product15.jpg", price: 150 },
    { id: 16, name: "mens Designer T-Shirts", image: "product16.jpg", price: 160 },
    { id: 17, name: "mens Designer T-Shirts", image: "product17.jpg", price: 170 },
    { id: 18, name: "mens Designer T-Shirts", image: "product18.jpg", price: 180 },
    { id: 19, name: "mens Designer T-Shirts", image: "product19.jpg", price: 190 },
    { id: 20, name: "mens Designer T-Shirts", image: "product20.jpg", price: 200 },
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
});

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.filter(product => product.name.toLowerCase().includes(searchTerm))
        .forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
}
