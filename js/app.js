let div = document.createElement("div");
div.className = "page-title";
let h2 = document.querySelector("h2.tc");
//let docFrag = document.createDocumentFragment();
//docFrag.appendChild(h2);
div.appendChild(h2);
document.body.insertBefore(div, document.getElementById("script1"));
