document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const productModal = document.getElementById("product-modal");
  const modalContent = document.getElementById("modal-content");

  function loadProducts() {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "bg-white p-4 rounded shadow-lg";
      productCard.innerHTML = `
          <img src="${product.image}" alt="${
        product.name
      }" class="w-full h-48 object-cover rounded">
          <h2 class="text-xl font-bold mt-4">${product.name}</h2>
          <p class="text-gray-700">${product.description}</p>
          <p class="text-blue-500 font-bold">$${product.price.toFixed(2)}</p>
          <button onclick="showModal(${
            product.id
          })" class="mt-2 bg-blue-500 text-white p-2 rounded">View</button>
          <button onclick="addToCart(${
            product.id
          })" class="mt-2 bg-green-500 text-white p-2 rounded">Add to Cart</button>
        `;
      productList.appendChild(productCard);
    });
  }

  function showModal(productId) {
    const product = products.find((p) => p.id === productId);
    modalContent.innerHTML = `
        <h2 class="text-xl font-bold">${product.name}</h2>
        <img src="${product.image}" alt="${
      product.name
    }" class="w-full h-48 object-cover rounded mt-4">
        <p class="text-gray-700 mt-4">${product.description}</p>
        <p class="text-blue-500 font-bold mt-2">$${product.price.toFixed(2)}</p>
      `;
    productModal.classList.remove("hidden");
  }

  window.closeModal = function () {
    productModal.classList.add("hidden");
  };

  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  }

  loadProducts();
});
