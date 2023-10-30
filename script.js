document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    if (username === "username" && password === "password") {
        document.getElementById("error-message").textContent = "Selamat datang!";
        if (remember) {
            // Logika untuk mengingat pengguna di sini
            console.log("Ingat Saya dicentang");
        }
    } else {
        document.getElementById("error-message").textContent = "Username atau password salah. Silakan coba lagi.";
    }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match!");
        return;
    }
    
    alert("Sign up successful. You can now log in.");
});
