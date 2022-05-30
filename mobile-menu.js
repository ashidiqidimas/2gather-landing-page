const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (menu.classList.contains('hidden')) {
        btn.querySelector("img").src="images/menu.png"
    } else {
        btn.querySelector("img").src="images/cancel.png"
    }
});
