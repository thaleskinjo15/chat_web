document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastro-form");
    const usuarioInput = document.getElementById("usuario");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const senhaInput = document.getElementById("senha");
    const confirSenhaInput = document.getElementById("confir-senha");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (usuarioInput.value.trim() === "") {
            setErrorFor(usuarioInput, "Nome de usuário não pode estar em branco");
        } else {
            setSuccessFor(usuarioInput);
        }

        if (emailInput.value.trim() === "") {
            setErrorFor(emailInput, "Email não pode estar em branco");
        } else {
            setSuccessFor(emailInput);
        }

        if (telefoneInput.value.trim() === "") {
            setErrorFor(telefoneInput, "Telefone não pode estar em branco");
        } else {
            setSuccessFor(telefoneInput);
        }

        if (senhaInput.value.trim() === "") {
            setErrorFor(senhaInput, "Senha não pode estar em branco");
        } else {
            setSuccessFor(senhaInput);
        }

        if (confirSenhaInput.value.trim() === "" || confirSenhaInput.value !== senhaInput.value) {
            setErrorFor(confirSenhaInput, "Senhas não coincidem");
        } else {
            setSuccessFor(confirSenhaInput);
        }

        if (!form.querySelectorAll(".campo.error").length) {
            form.submit();
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
