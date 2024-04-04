document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Hardcoded username and password (for demonstration purposes)
    var validUsername = "student";
    var validPassword = "password";
  
    if (username === validUsername && password === validPassword) {
      // Redirect to student page upon successful login
      window.location.href = "student.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  