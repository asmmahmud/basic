let div = document.createElement("div");
div.className = "page-title";
let h2 = document.querySelector("h1.tc");

div.appendChild(h2);
document.body.insertBefore(div, document.body.firstElementChild);
