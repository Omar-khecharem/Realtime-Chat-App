
let error = document.querySelector(".error");
let bttn = document.getElementById("bttn");
let firstname = document.getElementById("first-name");
let email = document.getElementById("email");
let loginBtn = document.getElementById("login-btn");
let passLog = document.getElementById("pass-log");
let emailR = document.getElementById("emailR");
let firstName = document.getElementById("first-name");
let LastName = document.getElementById("last-name");
let password = document.getElementById("password");
let file = document.getElementById("file");





if (loginBtn){



loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if (email.value.trim() === '' || passLog.value.trim() === '') {
        error.style.display = "flex";
    } else {
        error.style.display = "none";
    }
});
}
else{

bttn.addEventListener("click", (e) => {
e.preventDefault();

    if (firstname.value.trim() === '' ||
firstname.value.trim() === '' ||
LastName.value.trim() === '' ||
password.value.trim() === '' ||
emailR.value.trim() === '' ||
!file.files || file.files.length === 0
 ) {
        error.style.display = "flex";
    } else {
        error.style.display = "none";
    }
});

}
