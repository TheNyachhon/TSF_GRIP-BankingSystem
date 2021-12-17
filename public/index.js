window.onscroll = function () {
    // Hide and display the go to top button
    const top = document.getElementById("goup");
    if (pageYOffset >= 100) {
        top.style.display = "unset";
    } else {
        top.style.display = "none";
    }
    // Hide and show Go down button
    const down = document.getElementById("down");
    if (pageYOffset >= 500) {
        down.style.display = "none";
    } else {
        down.style.display = "flex";
    }
};
// if window resize call responsive function
$(window).resize(function () {
    screen_resize();
});
// call responsive function on default :)
$(document).ready(function () {
    screen_resize();
});

// Collapasble Nav Bar
const nav = document.querySelector("#dropdown");
const header = document.querySelector("#tocollapse");
// DROPDOWN Menu Display
const dropdownIcon = document.querySelector('#dropdown-icon');
dropdown.addEventListener('click', () => {
    if (header.style.visibility === "visible") { //if nav is visible then hide
        header.style.visibility = "hidden";
        header.style.transform = "translateY(-100%)"
        dropdownIcon.classList.toggle('fa-times')
        dropdownIcon.classList.toggle('fa-list')
    } else { //if nav is not visible , then display
        header.style.visibility = "visible";
        header.style.transform = "translateY(0)";
        dropdownIcon.classList.toggle('fa-times')
        dropdownIcon.classList.toggle('fa-list')
    }
})