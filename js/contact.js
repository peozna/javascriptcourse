// Get form and input elements
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const subject = document.getElementById('subject');
const messageInput = document.getElementById('message');

function showError(inputElement, message) { // Function to show error messages
    const errorElement = document.getElementById(inputElement.id + 'Error'); // Get corresponding error element
    errorElement.textContent = message; // Set error message

    inputElement.classList.add('input-error'); // Add error styling to input
    inputElement.classList.remove('input-valid'); // Remove valid styling if present
}

function clearError(inputElement) { // Function to clear error messages
    const errorElement = document.getElementById(inputElement.id + 'Error'); // Get corresponding error element
    errorElement.textContent = ''; // Clear error message

    inputElement.classList.remove('input-error'); // Remove error styling
    inputElement.classList.add('input-valid'); // Add valid styling
}

function clearForm() { // Function to clear the form

    //Clear input fields
    nameInput.value = '';
    lastNameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    subject.value = '';
    messageInput.value = '';
    
    [nameInput, emailInput, subject, messageInput].forEach(input => {
        input.classList.remove('input-valid', 'input-error'); // Remove valid styling from all inputss
    });

    //Clear error messages
    clearError(nameInput);  
    clearError(emailInput); 
    clearError(subject);    
    clearError(messageInput); 

    //Reset message counter
    const messageCounter = document.getElementById('messageCounter');
    messageCounter.textContent = '0 / 20 characters'; // Reset counter text
    messageCounter.style.color = ''; // Reset counter color

}   

// Function to show success message
function successMessage() {
    const successDiv = document.getElementById('successMessage'); // Get success message element
    const firstName = nameInput.value.trim().split(' ')[0]; // Get first name

    successDiv.textContent = `Thank you, ${firstName}, for contacting us! We will get back to you shortly.`; // Set success message
    successDiv.style.display = 'block'; // Show success message

    setTimeout(() => { // Hide success message after 3 seconds
        successDiv.style.display = 'none';
    }, 3000);
}

// Function to validate name input
function validateName() { // Validate name input
    const name = nameInput.value.trim();
    if (name === '') { // Check if name is empty
        showError(nameInput, 'Please enter your name.');
        return false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(name)) { // Check if name contains only letters and spaces
        showError(nameInput, 'Name can only contain letters and spaces.');
        return false;
    }
    else { // Name is valid
        clearError(nameInput); // Clear any previous error
        return true;
    }
}
// Function to validate Last name input
function validateLastName() { // Validate last name input
    const lastName = lastNameInput.value.trim();
    if (lastName === '') { // Check if last name is empty
        showError(lastNameInput, 'Please enter your last name.');
        return false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(lastName)) { // Check if last name contains only letters and spaces
        showError(lastNameInput, 'Last name can only contain letters and spaces.');
        return false;
    }
    else { // Last name is valid
        clearError(lastNameInput); // Clear any previous error
        return true;
    }
}

//Function to validate phone number
function validatePhone() { // Validate phone number input
    const phone = phoneInput.value.trim();
    const phonePattern = /^\+?[0-9\s\-()]{7,15}$/; // Basic phone number pattern
    if (phone == '') { // If phone number is empty, it's valid (optional field)
        clearError(phoneInput); // Clear any previous error
        return true;
    }
    else if (!phonePattern.test(phone)) { // Check if phone number matches pattern
        showError(phoneInput, 'Please enter a valid phone number.');
        return false;
    }
    else {
        clearError(phoneInput); // Clear any previous error
        return true;
    }
};

//Function to validate email
function validateEmail() { // Validate email input
    const email = emailInput.value.trim(); // Get email value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email pattern
    if (email === '') { // Check if email is empty
        showError(emailInput, 'Please enter your email.');
        return false;
    }
    else if (!emailPattern.test(email)) { // Check if email matches pattern
        showError(emailInput, 'Email must contain @ and a domain.');
        return false;
    }
    else {
        clearError(emailInput); // Clear any previous error
        return true;
    }
}

// Function to validate subject selection
function validateSubject() { // Validate subject selection
    const subjectValue = subject.value; // Get selected subject value
    if (subjectValue === '') { // Check if subject is not selected
        showError(subject, 'Please select a subject.');
        return false;
    }
    else {
        clearError(subject); // Clear any previous error
        return true;
    }
}

// Function to validate message input
function validateMessage() { // Validate message input
    const message = messageInput.value.trim(); // Get message value
    if (message.length < 20) { // Check if message is less than 20 characters
        showError(messageInput, 'The message must contain minimum 20 characters.');
        return false;
    }
    else {
        clearError(messageInput); // Clear any previous error
        return true;
    }   
}

messageInput.addEventListener('input', function() { // Message input event listener
    const messageLength = messageInput.value.length; // Get current message length
    const messageCounter = document.getElementById('messageCounter');   // Get message counter element
    messageCounter.textContent = `${messageLength} / 20 characters`; // Update message counter

    if (messageLength < 20) { // If message is less than 20 characters
        messageCounter.style.color = 'red'; // Set counter color to red
    }
    else {
        messageCounter.style.color = 'green'; // Set counter color to green
    }
});

// Event listeners for form validation
nameInput.addEventListener('blur', validateName);
lastNameInput.addEventListener('blur', validateLastName);
phoneInput.addEventListener('blur', validatePhone);
emailInput.addEventListener('blur', validateEmail);
subject.addEventListener('change', validateSubject);
messageInput.addEventListener('input', validateMessage);

contactForm.addEventListener('submit', function(event) { // Form submission event listener
    const isNameValid = validateName();
    const isLastNameValid = validateLastName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    if (!isNameValid || !isLastNameValid || !isPhoneValid || !isEmailValid || !isSubjectValid || !isMessageValid) { // If any validation fails
        event.preventDefault(); // Prevent form submission
    }
    else {
        event.preventDefault(); // Prevent form submission for demonstration purposes
        successMessage(); // Show success message
        clearForm(); // Clear the form on successful submission
    }
});
