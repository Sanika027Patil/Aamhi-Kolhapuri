    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");

    function addToCart(name, price) {
        const image = event.target.parentElement.querySelector("img").src; // Get product image
        let existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if item exists
        } else {
            cart.push({ name, price, quantity: 1, image }); // Add new item
        }

        localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
        alert("Item added to cart!");
    }

    function renderCart() {
        cartContainer.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h4>${item.name}</h4>
                        <p>₹${item.price} x ${item.quantity}</p>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
        cartTotal.innerText = total;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    document.addEventListener("DOMContentLoaded", renderCart); // Load cart on page load
