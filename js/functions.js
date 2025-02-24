// Cuenta regresiva
// Fecha de la boda (09 de Febrero del 2026)
const weddingDate = new Date("Feb 9, 2026 13:00:00").getTime();
//Feb 9, 2026 13:00:00
const afterWeddingDate = new Date("Feb 10, 2025 00:00:00").getTime();

//Función de flecha para actualizar la cuenta regresiva
const updateCountdown = () => {
    const now = new Date().getTime(); // Fecha actual
    const distance = weddingDate - now; // Diferencia entre la boda y la fecha actual

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualización del DOM usando las clases para seleccionar los elementos
    document.querySelector(".days").innerText = days.toString().padStart(3, "0");
    document.querySelector(".hours").innerText = hours.toString().padStart(2, "0");
    document.querySelector(".minutes").innerText = minutes.toString().padStart(2, "0");
    document.querySelector(".seconds").innerText = seconds.toString().padStart(2, "0");

    // Si la cuenta regresiva ha terminado, detener la actualización y mostrar mensaje
    if (distance < 0) {
        clearInterval(interval);
        const countdownTitle = document.querySelector(".countdown-title");

        countdownTitle.innerHTML = "¡Hoy es el gran día!";
        countdownTitle.classList.add("finish");
        document.querySelector(".countdown-container").style.display = "none";

        if (now > afterWeddingDate) {
            const weddingDateTitle = document.querySelector(".wedding-date-title");

            weddingDateTitle.innerHTML = "Nuestro gran día se celebró el";
            countdownTitle.style.display = "none";
            document.querySelector(".countdown-container").style.display = "none";
        }
    }
};

// Actualizar la cuenta regresiva cada segundo
const interval = setInterval(updateCountdown, 1000);

// Inicializar la cuenta regresiva en el inicio
updateCountdown();

document.addEventListener("DOMContentLoaded", () => {

// Botones ver ubicacion de ceremonia y recepcion
const receptionCeremonyButtons = document.querySelectorAll(".reception-ceremony-button");

receptionCeremonyButtons.forEach(button => {
    button.addEventListener("touchstart", () => {
        button.classList.add("hover");
    });

    button.addEventListener("touchend", () => {
        button.classList.remove("hover");
    });
});


    // Boton confirmar asistencia
    const attendanceButton = document.querySelector(".confirm-attendance-button");

    attendanceButton.addEventListener("touchstart", () => {
        attendanceButton.classList.add("hover");
    });

    attendanceButton.addEventListener("touchend", () => {
        attendanceButton.classList.remove("hover");
    });

    
    // Boton datos bancarios
    const bankDetailsButton = document.querySelector(".bank-details-button");

    bankDetailsButton.addEventListener("touchstart", () => {
        bankDetailsButton.classList.add("hover");
    });

    bankDetailsButton.addEventListener("touchend", () => {
        bankDetailsButton.classList.remove("hover");
    });


    // Apertura del modal
    const openModalButton = document.querySelector(".bank-details-button");
    const modal = document.getElementById("open-modal");
    const closeModalButton = document.querySelector(".close");

    openModalButton.addEventListener("click", () => {
        modal.classList.add("show");
        document.body.classList.add("no-scroll");
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.classList.remove("no-scroll");
    });


    // --Si el usuario da clic fuera del modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            document.body.classList.remove("no-scroll");
        }
    });
});
