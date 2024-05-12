document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recuperarSenhaP1");
    const emailTelefoneInput = document.getElementById("email_telefone");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (emailTelefoneInput.value.trim() === "") {
            setErrorFor(emailTelefoneInput, "Email ou telefone não pode estar em branco");
        } else {
            setSuccessFor(emailTelefoneInput);
        }

        if (!emailTelefoneInput.classList.contains("error")) {
            window.location.href = "recuperar_senhaP2.html";
        }
    });

    function setErrorFor(input, message) {
        const campo = input.parentElement;
        const errorMsg = campo.querySelector("small");
        campo.className = "campo error";
        errorMsg.innerText = message;
    }

    function setSuccessFor(input) {
        const campo = input.parentElement;
        campo.className = "campo success";
    }
});
