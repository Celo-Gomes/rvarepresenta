
document.addEventListener("DOMContentLoaded", function(){
    const send = document.querySelector('#send')
    const mail = document.querySelector("#mail")
    const ipName = document.querySelector('#name')
    const ipZap = document.querySelector('#zap')
    send.onclick = () =>{
        if(ipName.value && ipZap.value && mail.checkValidity()){
            loader.style.opacity = '1'
            let elements = document.querySelectorAll(".element")
            elements.forEach((element)=>{
                element.classList.add('animate')
            })    
        }  
    }
})