let input = document.getElementById("send-inp");
let btn = document.getElementById("send-btn");
let contenu = document.getElementById("contenu");
let error = document.querySelector(".error");
let bttn = document.getElementById("bttn");
let firstname = document.getElementById("first-name");

btn.addEventListener("click", () => {

  let msg = document.createElement("span");
  msg.classList.add("msg");
  msg.textContent = input.value;
  input.value = "";
  contenu.appendChild(msg);
  contenu.scrollTop = contenu.scrollHeight;
});


bttn.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstname.value.trim() === '') {
        error.style.display = "flex";
    } else {
        error.style.display = "none";
    }
});