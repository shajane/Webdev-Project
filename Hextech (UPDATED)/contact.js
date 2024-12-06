// Array to store submissions
let submissions = [];

// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Capture form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate inputs
    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Check if email is lowercase
    if (email !== email.toLowerCase()) {
        alert("Email must be in lowercase only.");
        return;
    }

    // Validate phone number (must be 11 digits)
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits and contain only numbers.");
        return;
    }


    // Reset form fields
    document.getElementById("contactForm").reset();

    // Show success message
    alert("Thank you for getting in touch! Your submission has been recorded.");
});
