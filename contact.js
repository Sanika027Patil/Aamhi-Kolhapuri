document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Validate inputs
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form after submission
    document.getElementById("contactForm").reset();
});
