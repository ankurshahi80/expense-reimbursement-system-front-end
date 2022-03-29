const logoutEl = document.querySelector("#logout");

function logout() {
  localStorage.removeItem('jwt');
}

logoutEl.addEventListener("click",logout);