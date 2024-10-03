(function() {
    emailjs.init("9Gdu-5ZCVkaXOT0pB");  // Replace with your EmailJS User ID
  })();
  
  // Handle the form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Send form data via EmailJS
    emailjs.sendForm('TrapJack1738!', 'template_serq5ct', this)
      .then(function() {
        alert('Message Sent Successfully!');
      }, function(error) {
        alert('Failed to send the message. Error: ' + JSON.stringify(error));
      });
  });
  