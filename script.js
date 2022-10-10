"use strict";
document.addEventListener("DOMContentLoaded", init);

const icon = document.querySelector("#icon");

function init() {
    icon.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            icon.src = "./graphics/sun.png"
        } else {
            icon.src = "./graphics/moon.png"

        }
    })
}