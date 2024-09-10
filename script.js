// script.js

// Function to handle signup
function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const form = document.getElementById('signupForm');
    const formData = new FormData(form);

    // Perform form validation here if needed...

    // Simulate form submission (replace this with your actual signup logic)
    fetch('/signup', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Signup failed.');
    })
    .then(data => {
        // Handle successful signup response
        showSuccessMessage();
    })
    .catch(error => {
        console.error('Signup error:', error);
        // Handle signup error here (e.g., display an error message)
    });
}

// Function to show success message
function showSuccessMessage() {
    alert('Signup successful! You can now log in.');
    // You can also redirect to another page or perform other actions after successful signup
}

// Event listener for the signup form
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', handleSignup);
