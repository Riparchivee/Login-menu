let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let halamanLogin = document.getElementById('container');
let salahUser = document.getElementById('salahUser');
let salahPass = document.getElementById('salahPass');

// cek login
function checkLoginStatus() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  let username = localStorage.getItem('username');
  
  if (isLoggedIn === 'true' && username) {
    window.location.href = "startbootstrap/home.html";
  }
}

// load
checkLoginStatus();

function onLogin() {
  console.log('tombol login di klik');
  
  if (usernameInput.value == 'admin' && passwordInput.value == 'admin123') {
    // simpan
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', usernameInput.value);
    
    halamanLogin.style.opacity = "0";
    window.location.href = "startbootstrap/home.html";
  } else {
    salahUser.style.opacity = "1";
    salahPass.style.opacity = "1";
  }
}

// logout
function onLogout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  location.reload(); // ke awal
}