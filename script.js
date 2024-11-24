// Basic Variables
const API_URL = 'https://api.github.com/users/';
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const userInfo = document.getElementById('user-info');
const errorMessage = document.getElementById('error-message');
const themeToggle = document.getElementById('theme-toggle');

const avatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const userBio = document.getElementById('user-bio');
const userRepos = document.getElementById('user-repos');
const userFollowers = document.getElementById('user-followers');
const userFollowing = document.getElementById('user-following');


async function fetchUser(username) {
  try {
    const response = await fetch(API_URL + username); 
    if (!response.ok) {
      throw new Error('User not found'); 
    }
    const data = await response.json(); 
    displayUser(data);
  } catch (error) {
    showError(error.message); 
  }
}


function displayUser(data) {
  avatar.src = data.avatar_url;
  userName.textContent = data.name || 'No name available';
  userBio.textContent = data.bio || 'No bio available';
  userRepos.textContent = data.public_repos;
  userFollowers.textContent = data.followers;
  userFollowing.textContent = data.following;

  userInfo.classList.remove('hidden'); 
  errorMessage.classList.add('hidden');
}

// Function to show error messages
function showError(message) {
  userInfo.classList.add('hidden'); 
  errorMessage.textContent = message; 
  errorMessage.classList.remove('hidden'); 
}

// Add event listener to Search button
searchBtn.addEventListener('click', function () {
  const username = searchInput.value.trim(); 
  if (username) {
    fetchUser(username); 
  } else {
    showError('Please enter a GitHub username.'); 
  }
});

// Add event listener to Theme Toggle button
themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark'); 
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = 'Switch to Light Theme';
  } else {
    themeToggle.textContent = 'Switch to Dark Theme';
  }
});