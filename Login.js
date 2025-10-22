const container = document.querySelector('.container');
const formBox = document.querySelector('.form-box');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlayText');
const overlaySubText = document.getElementById('overlaySubText');
const toggleButton = document.getElementById('toggleButton');

// Function to toggle forms
function toggleForm() {
    container.classList.toggle('active');

    if (container.classList.contains('active')) {
        loginForm.style.display = "none";
        registerForm.style.display = "block";

        overlayText.textContent = "Join Aamhi Kolhapuri";
        overlaySubText.textContent = "Create an account and shop the best Kolhapuri chappals!";
        toggleButton.textContent = "Login";
    } else {
        loginForm.style.display = "block";
        registerForm.style.display = "none";

        overlayText.textContent = "Welcome Back!";
        overlaySubText.textContent = "Login to continue shopping for Kolhapuri chappals.";
        toggleButton.textContent = "Sign Up";
    }
}

// Function to show error messages
function showError(input, message) {
    const errorDiv = document.createElement('p');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '12px';
    errorDiv.textContent = message;
    
    // Remove any existing error messages before adding new ones
    if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
        input.nextElementSibling.remove();
    }
    
    input.insertAdjacentElement('afterend', errorDiv);
}

// Function to validate login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevents form submission

    let email = document.querySelector(".login-form input[type='email']");
    let password = document.querySelector(".login-form input[type='password']");
    let isValid = true;

    // Email validation
    if (!email.value.trim()) {
        showError(email, "Email is required");
        isValid = false;
    }

    // Password validation
    if (!password.value.trim()) {
        showError(password, "Password is required");
        isValid = false;
    }

    if (isValid) {
        window.location.href = "index.html"; // Redirects to index.html
    }
}

// Function to validate signup form
function validateSignupForm(event) {
    event.preventDefault(); // Prevents form submission

    let name = document.querySelector(".register-form input[type='text']");
    let email = document.querySelector(".register-form input[type='email']");
    let phone = document.querySelector(".register-form input[placeholder='Phone Number']");
    let gender = document.querySelector(".register-form select");
    let password = document.querySelector(".register-form input[type='password']");
    let confirmPassword = document.querySelector(".register-form input[placeholder='Confirm Password']");
    let terms = document.querySelector(".register-form input[type='checkbox']");
    let isValid = true;

    // Name validation
    if (!name.value.trim()) {
        showError(name, "Full Name is required");
        isValid = false;
    }

    // Email validation
    if (!email.value.trim()) {
        showError(email, "Email is required");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        showError(email, "Enter a valid email");
        isValid = false;
    }

    // Phone number validation
    if (!phone.value.trim()) {
        showError(phone, "Phone number is required");
        isValid = false;
    } else if (!/^\d{10}$/.test(phone.value)) {
        showError(phone, "Enter a valid 10-digit phone number");
        isValid = false;
    }

    // Gender selection validation
    if (gender.value === "") {
        showError(gender, "Please select your gender");
        isValid = false;
    }

    // Password validation
    if (!password.value.trim()) {
        showError(password, "Password is required");
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters long");
        isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword.value.trim()) {
        showError(confirmPassword, "Please confirm your password");
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    }

    // Terms & Conditions validation
    if (!terms.checked) {
        showError(terms, "You must agree to the Terms & Conditions");
        isValid = false;
    }

    if (isValid) {
        window.location.href = "index.html"; // Redirects to index.html
    }
}

// Add event listeners for login and signup buttons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login-form button").addEventListener("click", validateLoginForm);
    document.querySelector(".register-form button").addEventListener("click", validateSignupForm);
});
