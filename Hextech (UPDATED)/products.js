document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Capture input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const postalCode = document.getElementById("postal code").value.trim();

    // Validate all fields
    if (!name || !email || !phone || !address || !postalCode) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate email (must be lowercase)
    if (email !== email.toLowerCase()) {
        alert("Email must be in lowercase only.");
        return;
    }

    // Validate phone number (must be 10 digits)
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits and contain only numbers.");
        return;
    }

    // Validate postal code (must be 5 digits)
    const postalCodeRegex = /^[0-9]{4}$/;
    if (!postalCodeRegex.test(postalCode)) {
        alert("Postal code must be 4 digits and contain only numbers.");
        return;
    }

    // Process order (simulate database storage)
    const order = {
        name,
        email,
        phone,
        address,
        postalCode,
        orderPlacedAt: new Date().toISOString(),
    };

    console.log("Order placed:", order);

    // Reset the form
    document.querySelector("form").reset();

    // Display success message
    alert("Your order has been successfully placed. Thank you!");
});
