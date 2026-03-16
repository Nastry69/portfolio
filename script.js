let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const message = document.getElementById("form-message");

    emailjs.sendForm(
        "service_1",
        "template_2",
        this
    ).then(() => {

        message.style.display = "block";
        message.className = "form-message success";
        message.innerText = "✔ Message envoyé avec succès !";

        this.reset();

    }).catch((error) => {

        message.style.display = "block";
        message.className = "form-message error";
        message.innerText = "❌ Une erreur est survenue. Veuillez réessayer.";

        console.error(error);
    });

});