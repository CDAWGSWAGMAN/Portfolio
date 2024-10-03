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
                alert('Message Sent Successfully!');
                // Optionally reset the form after submission
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Failed to send the message. Error: ' + JSON.stringify(error));
            });
    });
});
