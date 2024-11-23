// Function to fetch GitHub user data
function fetchUser(username) {
    // Define the API URL
    const API_URL = 'https://api.github.com/users/';
  
    // Use fetch to request data from the GitHub API
    fetch(API_URL + username)
      .then(function (response) {
        // Check if the response is okay (status 200–299)
        if (!response.ok) {
          // If not, throw an error with a message
          throw new Error('User not found');
        }
        // Convert the response to JSON format
        return response.json();
      })
      .then(function (data) {
        // If successful, display the user data
        displayUser(data);
      })
      .catch(function (error) {
        // If an error occurs, show an error message
        showError(error.message);
      });
  }
  