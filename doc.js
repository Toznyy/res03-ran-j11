let sections = document.querySelectorAll("body > main > section");
let active = document.getElementsByClassName("active");
let button = document.querySelectorAll("button");
for (let i=0; i<sections.length; i++){
    let idx=i;
    sections[i].addEventListener("click",function(event){
        if ((idx+1)<sections.length){
            sections[idx].classList.remove("active");
            sections[idx+1].classList.add("active");
        }
        else{
            sections[idx].classList.remove("active");
            sections[0].classList.add("active");
        }
    });
}

let form = document.querySelector("form:first-of-type");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let usernameInput = document.querySelector("#username");
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");
    let confirmPasswordInput = document.querySelector("#confirm-password");
    if (usernameInput.value() !== ""){
        event.target.submit();}
    else {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        inputError.innerHTML="Aucun nom d'utilisateur n'a été saisi.";
        inputError.classList.add("error");
        fieldset.appendChild(inputError);
    }
});