header.style.visibility = "hidden";
header.style.transform = "translateY(-100%)"
const redirect = document.querySelector(".redirect")
// redirect.addEventListener('click',(e)=>{
function delayRedirect(e,url){
    e.preventDefault()
    navbarAnimate()
    setTimeout(()=>{
        window.location.href = url
    },500)
}
function TransferRedirect(e,url){
    e.preventDefault()
    setTimeout(()=>{
        window.location.href = url
    },500)
}
function navbarAnimate(){
    header.style.visibility = "visible";
    header.style.transform = "translateY(0)"
}