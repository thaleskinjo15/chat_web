document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recup_senha2");
    const senhaInput = document.getElementById("senha");
    const novaSenhaInput = document.getElementById("nova_senha");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (senhaInput.value !== novaSenhaInput.value) {
            setErrorFor(novaSenhaInput, "As senhas não coincidem");
        } else {
            setSuccessFor(novaSenhaInput);
        }

        if (!novaSenhaInput.classList.contains("error")) {
            window.location.href = "login.html";
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
