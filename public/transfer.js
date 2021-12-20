const form = document.querySelector("form")
const transfer = document.querySelector('#loading')
form.addEventListener('submit',()=>{
    transferring();
    setTimeout(()=>{
        return true;
    },500)    
})
function transferring(){
    transfer.style.visibility = "visible";
}