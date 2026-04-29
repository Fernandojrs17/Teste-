fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("grid");
 
    data.products.forEach(product => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.photo}">
        <p>${product.productName}</p>
        <strong>${format(product.price)}</strong>
        <button>COMPRAR</button>
      `;
 
      card.onclick = () => openModal(product);
      grid.appendChild(card);
    });
  });
 
 
function format(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
 
function openModal(p) {
  document.getElementById("img").src = p.photo;
  document.getElementById("title").innerText = p.productName;
  document.getElementById("desc").innerText = p.descriptionShort;
  document.getElementById("price").innerText = format(p.price);
  document.getElementById("modal").classList.remove("hidden");
 
  document.getElementById("close").onclick = () => {
    document.getElementById("modal").classList.add("hidden");
  };
 
  document.getElementById("modal").onclick = (e) => {
    if (e.target.id === "modal") {
      document.getElementById("modal").classList.add("hidden");
    }
  };
}