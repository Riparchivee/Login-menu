// Get DOM elements
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let halamanLogin = document.getElementById('container');
let salahUser = document.getElementById('salahUser');
let salahPass = document.getElementById('salahPass');

// New elements for registration
let registerUsernameInput = document.getElementById('registerUsernameInput');
let registerPasswordInput = document.getElementById('registerPasswordInput');
let registerButton = document.getElementById('registerButton');

// Check login status
function checkLoginStatus() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  let username = localStorage.getItem('username');
  
  if (isLoggedIn === 'true' && username) {
    window.location.href = "9At/home.html";
  }
}

// Load
checkLoginStatus();

// Login function
function onLogin() {
  console.log('tombol login di klik');
  
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let user = users.find(u => u.username === usernameInput.value && u.password === passwordInput.value);
  
  if (user) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', usernameInput.value);
    
    halamanLogin.style.opacity = "0";
    window.location.href = "9At/home.html";
  } else {
    salahUser.style.opacity = "1";
    salahPass.style.opacity = "1";
  }
}

// Registration function
function onRegister() {
  console.log('tombol register di klik');
  
  let username = registerUsernameInput.value;
  let password = registerPasswordInput.value;
  
  if (username && password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.some(u => u.username === username)) {
      alert('Username sudah dipaki.');
      return;
    }
    
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful. login sekarang.');
    window.location.href= "index.html"
    
    // Clear registration inputs
    registerUsernameInput.value = '';
    registerPasswordInput.value = '';
  } else {
    alert('Please enter both username and password.');
  }
}

// Logout function
function onLogout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  location.reload(); // back to start
}

// Add event listener for register button
if (registerButton) {
  registerButton.addEventListener('click', onRegister);
}