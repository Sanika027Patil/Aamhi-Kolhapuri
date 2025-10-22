function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-container");
  const cartTotal = document.getElementById("cart-total");

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.innerHTML = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="80" />
      <div>
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <p>
          Quantity:
          <button onclick="updateQuantity(${index}, -1)">-</button>
          ${item.quantity}
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartContainer.appendChild(itemDiv);
  });

  cartTotal.innerHTML = `<h2>Total: ₹${total}</h2>`;
}

function updateQuantity(index, delta) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

window.onload = loadCart;
