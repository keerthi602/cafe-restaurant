// ===============================
// MOBILE NAVBAR
// ===============================

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks = document.querySelectorAll("#navLinks a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// ===============================
// BOOKING FORM
// ===============================

const bookingForm =
    document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const date =
            document.getElementById("date").value;

        const guests =
            document.getElementById("guests").value;

        // Basic validation
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            date === "" ||
            guests === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        // Success message
        alert(
            "🎉 Table Reserved Successfully!\n\n" +
            "Name: " + name + "\n" +
            "Date: " + date + "\n" +
            "Guests: " + guests
        );

        // Clear form
        bookingForm.reset();

    });

}


// ===============================
// SET MINIMUM DATE
// ===============================

const dateInput =
    document.getElementById("date");

if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);

}


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector("nav");

    if (window.scrollY > 50) {

        navbar.style.background =
            "#2d1b12";

        navbar.style.boxShadow =
            "0 4px 15px rgba(0,0,0,0.2)";

    } else {

        navbar.style.background =
            "rgba(45, 27, 18, 0.96)";

        navbar.style.boxShadow =
            "none";
    }

});


// ===============================
// MENU CARD ANIMATION
// ===============================

const foodCards =
    document.querySelectorAll(".food-card");

foodCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "translateY(0)";

    });

});
