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

