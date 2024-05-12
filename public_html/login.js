document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email-telefone");
    const senhaInput = document.getElementById("senha");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (emailInput.value.trim() === "") {
            setErrorFor(emailInput, "Email ou telefone não pode estar em branco");
        } else {
            setSuccessFor(emailInput);
        }

        if (senhaInput.value.trim() === "") {
            setErrorFor(senhaInput, "Senha não pode estar em branco");
        } else {
            setSuccessFor(senhaInput);
        }

        if (!emailInput.classList.contains("error") && !senhaInput.classList.contains("error")) {
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
