const loginBtnEl = document.querySelector("#login-btn");

async function loginFormHandler(event){
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  const URL = "http://localhost:8080/login";

  if(username && password){
  const res = await fetch(URL, {
      method:'POST',
      body: JSON.stringify({
        "username":username,
        "password":password
      })
    })

    if(res.ok){
      // Get the token and store it on the client
      const token = res.headers.get("token");
      localStorage.setItem("jwt",token);
      
      const user = await res.json();
      localStorage.setItem('user_id',user.userId);

      if(user.userRole === "Manager"){
        document.location.replace("./manager-page.html"); 
      } else document.location.replace("./emp-page.html");
    }else {
      
      let failedLogin = document.querySelector("#failed-login p");
      failedLogin.innerText = await res.text();
    }
  }
}

loginBtnEl.addEventListener("click", loginFormHandler);