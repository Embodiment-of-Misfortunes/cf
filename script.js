// Function to handle login attempt
async function handleLogin(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const loginIdentifier = document.getElementById("loginIdentifier").value;
    const loginPassword = document.getElementById("loginPassword").value;

    console.log("Login form data:", { loginIdentifier, loginPassword });

    const formData = {
        email: loginIdentifier, // Assuming email is used as the identifier for login
        password: loginPassword
    };

    try {
        // Send POST request to login endpoint
        const response = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        // Throw error for non-2xx responses
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
        
       // Handle successful login response
const data = await response.json();
console.log("Login successful:", data);
// Redirect to the dashboard page
window.location.href = "http://localhost:3000/src/UI/dashboard.html";
    } catch (error) {
        // Display a popup message for invalid credentials
        alert("Invalid username or password");
        console.error("Error:", error);
    }
}

// Example: Call handleLogin function when login form is submitted
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLogin);

// Function to handle registration form submission
async function handleRegistration(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const username = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = {
        username: username,
        email: email,
        password: password
    };

    try {
        // Send POST request to signup endpoint with JSON data
        const response = await fetch("http://localhost:4000/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        // Throw error for non-2xx responses
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Handle response
        const data = await response.json();
        console.log("Registration successful:", data);
        // Optionally, redirect or perform other actions after successful registration
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example: Call handleRegistration function when registration form is submitted
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", handleRegistration);
