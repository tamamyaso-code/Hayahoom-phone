
async function loadProducts(){
let products;

if(localStorage.getItem("products")){
products = JSON.parse(localStorage.getItem("products"));
}else{
products = await fetch("products.json").then(r=>r.json());
}

const grid = document.getElementById("product-grid");
grid.innerHTML="";

products.forEach(p=>{
let statusText = p.status=="sold" ? "🔴 مباع" : "🟢 متوفر";

grid.innerHTML += `
<div class="product-card">
<img src="${p.image}">
<h4>${p.name}</h4>
<p>السعر: ${p.price}</p>
<p>${statusText}</p>
<a class="btn-whatsapp" target="_blank"
href="https://wa.me/905386993524?text=مرحبا أريد الاستفسار عن ${p.name}">
اسأل عبر واتساب
</a>
</div>
`;
});
}

loadProducts();
