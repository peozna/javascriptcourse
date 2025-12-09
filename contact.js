
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subject = document.getElementById('subject');
const messageInput = document.getElementById('message');

function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Name can only contain letters and spaces.');
        return false;
    }
    else {
        return true;
    }
}
