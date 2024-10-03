// Initialize EmailJS with your user ID
(function() {
    emailjs.init("9Gdu-5ZCVkaXOT0pB"); // Replace with your EmailJS User ID
})();

// Function to display success or error messages
function displayMessage(message, type) {
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = message;

    // Clear previous classes
    feedbackMessage.className = 'feedback-message'; 
    feedbackMessage.classList.add(type === 'success' ? 'success' : 'error'); 

    // Show the feedback message
    feedbackMessage.style.display = 'block'; 

    // Fade out after 3 seconds
    setTimeout(() => {
        feedbackMessage.style.display = 'none'; // Hide the message after 3 seconds
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
