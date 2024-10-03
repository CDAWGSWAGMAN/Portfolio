// Initialize EmailJS with your user ID
(function() {
    emailjs.init("9Gdu-5ZCVkaXOT0pB");  // Replace with your EmailJS User ID
})();

// Function to display success or error messages
function displayMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.textContent = message;
    messageContainer.className = type === 'success' ? 'success-message' : 'error-message';
    document.body.appendChild(messageContainer);
    
    // Fade out after 3 seconds
    setTimeout(() => {
        messageContainer.classList.add('fade-out'); // Add the fade-out class
        // Remove the message after the fade-out transition
        setTimeout(() => {
            messageContainer.remove();
        }, 500); // Wait for the transition duration
    }, 3000);
}

// Handle the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Send form data via EmailJS
    emailjs.sendForm('service_45rblhl', 'template_zd76i6s', this)
        .then(function() {
            displayMessage('Message Sent Successfully!', 'success');
            document.getElementById('contact-form').reset(); // Reset form after submission
        }, function(error) {
            displayMessage('Failed to send the message. Error: ' + JSON.stringify(error), 'error');
        });
});
