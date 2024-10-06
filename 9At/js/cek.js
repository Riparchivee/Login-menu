function checkLoginStatus() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  let username = localStorage.getItem('username');
  let halamanIni = window.location.pathname;
  
  if (isLoggedIn === 'true' && username) {
    if (halamanIni !== '/9At/home.html') {
      window.location.href = "9At/home.html";
    }
  } else {
    if (halamanIni !== '/index.html') {
      window.location.href = "../index.html";
  } 
}
}

checkLoginStatus()