function validateForm() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const errorMessageDiv = document.getElementById('errorMessages');

    errorMessageDiv.innerHTML = '';

    if (nameInput.value.trim() === '') {
        errorMessageDiv.innerHTML += '<p>Please enter your name.</p>';
        nameInput.focus();
        nameInput.select();
        return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        errorMessageDiv.innerHTML += '<p>Please enter a valid 10-digit phone number.</p>';
        phoneInput.focus();
        phoneInput.select();
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        errorMessageDiv.innerHTML += '<p>Please enter a valid email address.</p>';
        emailInput.focus();
        emailInput.select();
        return false;
    }

    return true;
}
