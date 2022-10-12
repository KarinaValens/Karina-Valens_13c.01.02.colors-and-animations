"use strict";
import {
    animate,
    stagger
} from "https://cdn.skypack.dev/motion";


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

animate(
    "object", {
        transform: ["rotate(0deg)", "rotate(-45deg)", "rotate(0deg)", "rotate(45deg)", "rotate(0deg)"],
    }, {
        duration: 3,
        easing: "ease-in-out",
        repeat: Infinity
    }
);

//delay: stagger(0.2),