    // Usuários cadastrados no sistema
    const users = [
        { username: "juliano", password: "1234" },
    ];

    // Função de login
    function login() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let errorMessage = document.getElementById("error-message");

        let user = users.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "contrato.html";
        } else {
            errorMessage.textContent = "Usuário ou senha incorretos!";
        }
    }
