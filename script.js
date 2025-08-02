const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let strength = 0;
  if (val.match(/[a-z]+/)) strength += 1;
  if (val.match(/[A-Z]+/)) strength += 1;
  if (val.match(/[0-9]+/)) strength += 1;
  if (val.match(/[@$!%*#?&]+/)) strength += 1;
  if (val.length >= 8) strength += 1;

  const colors = ["red", "orangered", "orange", "yellowgreen", "green"];
  strengthBar.style.width = `${strength * 20}%`;
  strengthBar.style.background = colors[strength - 1] || "red";
});

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const emailError = document.getElementById("emailError");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.classList.remove("d-none");
    return;
  } else {
    emailError.classList.add("d-none");
  }

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Registration successful!");
  this.reset();
  strengthBar.style.width = "0%";
});
  this.reset();
  strengthBar.style.width = "0%";
;