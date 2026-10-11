const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});


document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});


document
  .getElementById("bookingForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Köszönjük! A foglalási igényedet elküldtük.");

  });