
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subject = document.getElementById('subject');
const messageInput = document.getElementById('message');

function showError(inputElement, message) { // Function to show error messages
    const errorElement = document.getElementById(inputElement.id + 'Error'); // Get corresponding error element
    errorElement.textContent = message; // Set error message
}

function clearError(inputElement) { // Function to clear error messages
    const errorElement = document.getElementById(inputElement.id + 'Error'); // Get corresponding error element
    errorElement.textContent = ''; // Clear error message
}

function clearForm() { // Function to clear the form

    //Clear input fields
    nameInput.value = '';
    emailInput.value = '';
    subject.value = '';
    messageInput.value = '';
    
    //Clear error messages
    clearError(nameInput);  
    clearError(emailInput); 
    clearError(subject);    
    clearError(messageInput); 

    //Reset message counter
    const messageCounter = document.getElementById('messageCounter');
    messageCounter.textContent = '0 / 20 characters';
    messageCounter.style.color = 'red';
}   

function successMessage() {
    const successDiv = document.getElementById('successMessage'); // Get success message element
    const firstName = nameInput.value.trim().split(' ')[0]; // Get first name

    successDiv.textContent = `Thank you, ${firstName}, for contacting us! We will get back to you shortly.`; // Set success message
    successDiv.style.display = 'block'; // Show success message

    setTimeout(() => { // Hide success message after 3 seconds
        successDiv.style.display = 'none';
    }, 3000);
}

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

contactForm.addEventListener('submit', function(event) { // Form submission event listener
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) { // If any validation fails
        event.preventDefault(); // Prevent form submission
    }
    else {
        event.preventDefault(); // Prevent form submission for demonstration purposes
        successMessage(); // Show success message
        clearForm(); // Clear the form on successful submission

    }
});
