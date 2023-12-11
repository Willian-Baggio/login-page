const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validações
    if(emailInput.value === "") {
        alert("Preencha o email");
        return;
    }

    if(passwordInput.value === "") {
        alert("Preencha a senha");
        return;
    }

    form.submit();
})

