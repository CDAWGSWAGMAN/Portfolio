// Initialize EmailJS with your User ID
(function() {
    emailjs.init("9Gdu-5ZCVkaXOT0pB");  // Replace with your EmailJS User ID
})();

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
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
});

// Function to display messages
function displayMessage(message, type) {
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = message;
    feedbackMessage.className = type === 'success' ? 'feedback success' : 'feedback error';
    feedbackMessage.style.display = 'block'; // Show the message

    // Hide the message after 3 seconds
    setTimeout(() => {
        feedbackMessage.style.display = 'none'; // Hide the message
    }, 3000); // 3000 milliseconds = 3 seconds
}
