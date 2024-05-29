document.getElementById("submit-button").addEventListener("click", function() {
    document.getElementById("contact-form").submit();
  });
  
  document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
  
    var form = event.target;
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    var formData = new FormData(form);
  
    fetch(form.action, {
      method: form.method,
      body: formData,
    }).then(response => response.json())
      .then(data => {
        alert("Thank you for your message!");
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert("There was an error submitting the form.");
      });
  });
  
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  