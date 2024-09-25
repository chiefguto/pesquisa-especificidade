function toggleMenu() {
    var menu = document.getElementById("menu");
    var content = document.getElementById("content");

    if (menu.style.width === "250px") {
        menu.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        menu.style.width = "250px";
        content.style.marginLeft = "250px";
    }
}