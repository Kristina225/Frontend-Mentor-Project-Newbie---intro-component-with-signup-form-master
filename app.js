const signupForm = document.querySelector(".signup__form");
const signupFormInputs = document.querySelectorAll(".signup__form--input");
const signupFormErrors = document.querySelectorAll(
  ".signup__form--input--error-message"
);

// HELPER FUNCTIONS

const isEmailValid = (enteredEmail) => {
  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(enteredEmail);
};

const addErrorMessage = (input, message) => {
  input.parentElement.classList.add("active");
  input.nextElementSibling.nextElementSibling.textContent = message;
};

const removeErrorMessage = (input) => {
  input.parentElement.classList.remove("active");
};

const getInputName = (input) => {
  return input.name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// EVENT LISTENER ON FORM

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  signupFormInputs.forEach((input) => {
    removeErrorMessage(input);

    const enteredValue = input.value.trim();
    const inputType = getInputName(input);

    if (enteredValue === "" || enteredValue === null) {
      addErrorMessage(input, `${inputType} cannot be empty`);
    }
    if (input.name === "email" && !isEmailValid(enteredValue)) {
      addErrorMessage(input, `Looks like this is not an email`);
    }
  });
});
