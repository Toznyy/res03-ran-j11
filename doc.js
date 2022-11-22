let sections = document.querySelectorAll("body > main > section");
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

let usernameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirm-password");
let form = document.querySelector("form:first-of-type");
let formOK=true;

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (usernameInput.value !== ""){
        console.log("cet input est ok ")}
    else {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type > fieldset:first-of-type");
        inputError.innerHTML="Aucun nom d'utilisateur n'a été saisi.";
        usernameInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
    if (emailInput.value !== ""){
        console.log("cet input est ok ")}
    else if (emailInput.value.indexOf(@,0)<0) || emailInput.value.indexOf(.,0)<0){
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type > fieldset:nth-of-type(2)");
        inputError.innerHTML="Un email invalide a été saisi (un email doit avoir au moins un @ et un .).";
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    else {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type > fieldset:nth-of-type(2)");
        inputError.innerHTML="Aucun email n'a été saisi.";
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
        if (passwordInput.value !== ""){
        console.log("cet input est ok ")}
    else {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type > fieldset:nth-of-type(3)");
        inputError.innerHTML="Aucun mot de passe n'a été saisi.";
        passwordInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
    if (confirmPasswordInput.value !== ""){
        console.log("cet input est ok ")}
    if (
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type > fieldset:nth-of-type(4)");
        inputError.innerHTML="Les deux mots ne passe ne correspondent pas.";
        confirmPasswordInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    else {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type > fieldset:nth-of-type(4)");
        inputError.innerHTML="Aucun mot de passe n'a été saisi.";
        confirmPasswordInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }

    
    if(form==true){
        event.target.submit()
    }
});