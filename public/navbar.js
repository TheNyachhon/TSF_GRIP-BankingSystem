// Collapasble Nav Bar
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