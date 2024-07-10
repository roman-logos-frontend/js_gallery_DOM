"use strict";
const ulItems = document.querySelector("#thumbs");
const mainImage = document.querySelector("#largeImg");
ulItems.addEventListener("click", ()=>{
    event.preventDefault();
    mainImage.src = event.target.closest(".list-item__link").href;
});

//# sourceMappingURL=index.f75de5e1.js.map
