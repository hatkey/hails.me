// theme_init.js

var html = document.querySelector("html");

var current_theme = localStorage.getItem("theme");

if (current_theme) {
    console.log("Theme found!");
    html.classList.add(current_theme);
} else {
    console.log("Theme not found! Using dark by default...");
    localStorage.setItem("theme", "dark");
    html.classList.add("dark");
}
