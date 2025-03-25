let cart = [];

const products = [
    { id: 1, name: "Acc VIP Level 2300", price: 100000, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Acc Swordsman Level 2000", price: 80000, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Acc Fruit Mastery Level 1800", price: 75000, img: "https://via.placeholder.com/200" },
];

function displayProducts() {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price.toLocaleString()} VND</p>
                <button onclick="addToCart(${product.id})">Mua ngay</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    cartItems.innerHTML = "";
    
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<li>${item.name} - ${item.price.toLocaleString()} VND 
            <button onclick="removeFromCart(${index})">❌</button></li>`;
    });

    cartCount.textContent = cart.length;
    document.getElementById("cart").classList.add("show");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("show");
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        return;
    }
    alert("Thanh toán thành công! Cảm ơn bạn.");
    cart = [];
    updateCart();
}

displayProducts();
