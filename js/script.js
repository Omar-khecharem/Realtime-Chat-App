let input = document.getElementById("send-inp");
let btn = document.getElementById("send-btn");
let contenu = document.getElementById("contenu");

function send(){
  if (!input.value.trim() == "") {
    let msg = document.createElement("span");
    msg.classList.add("msg");
    msg.textContent = input.value;
    input.value = "";
    contenu.appendChild(msg);
    contenu.scrollTop = contenu.scrollHeight;
  }
}


btn.addEventListener("click", send);

input.addEventListener("keypress",(e)=>{
    if (e.key==="Enter"){
        e.preventDefault()
        send();
    }
})
