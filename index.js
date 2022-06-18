const form = document.querySelector("#form");
const firstname = document.getElementById("firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const firstnameErr = document.querySelector("#firstnameerr");
const lastnameErr = document.querySelector("#lastnameerr");
const emailErr = document.querySelector("#emailerr");
const passwordErr = document.querySelector("#passworderr");
const letterAndWhitespace = /^[a-zA-Z\s]*$/;
const filterEmail =
  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // All validation checks are run in this method.
  const firstLetter = firstname?.value[0];
  // Return true if first letter is uppercase
  const firstLetterIsUpperCase = firstLetter === firstLetter.toUpperCase();
  //console.log(password.value);
  if (!firstLetterIsUpperCase) {
    firstnameErr.innerText += " The first letter of firstname must be uppercase.\n";
    firstname.nextElementSibling.style.display = "block";
  }

  if (!letterAndWhitespace.test(firstname.value)) {
    firstnameErr.innerText += "firstname must not include numbers onl whitespace.\n";
    firstname.nextElementSibling.style.display = "block";
  }

  const firstLetter2 = lastname.value[0];
  const firstLetterIsUpperCase2 = firstLetter2 === firstLetter2.toUpperCase();

  if (!firstLetterIsUpperCase2) {
    lastnameErr.innerText +=
      " The first letter of lastname must be uppercase.\n";
    lastname.nextElementSibling.style.display = "block";
  }
   if (!letterAndWhitespace.test(lastname.value)) {
     lastnameErr.innerText += "lastname must include at least one digit.\n";
     lastname.nextElementSibling.style.display = "block";
  }

  const badPasswordLength =
    password.value.length < 8 || password.value.length > 20;
  if (badPasswordLength) {
    passwordErr.innerText +=
      " The password should be within 8 to 20 characters.\n";
    password.nextElementSibling.style.display = "block";
  }

  // Regex to see if a digit is in the username, returns true if there is
  const passwordIncludesUppercase = /[a-z]/.test(password.value);

  if (!passwordIncludesUppercase) {
    passwordErr.innerText +=
      " The password should contain at least one uppercase character.\n";
    password.nextElementSibling.style.display = "block";
  }
  const IncludesDigit = /\d/.test(password.value);

  if (!IncludesDigit) {
     passwordErr.innerText +=
      " The password should contain at least one digit.\n";
    password.nextElementSibling.style.display = "block";
  }
});
