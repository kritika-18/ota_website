document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    if (form.checkValidity()) {
        const successMessage = document.getElementById("success-message");
        successMessage.classList.remove("d-none"); 
        
        form.reset();
    }
});
