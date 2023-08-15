
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#confirm-password");

const form = document.querySelector("#form-info-div");
let isInvalidMsgDisplayed = false;

const invalidMsgElement = document.createElement("p");
invalidMsgElement.style.color = "crimson";
invalidMsgElement.textContent = "*Passwords do not match.";

passwordConfirmationInput.addEventListener("input", () => {
    if (passwordInput.value !== passwordConfirmationInput.value) {
        if (!isInvalidMsgDisplayed) {
            form.append(invalidMsgElement);
            isInvalidMsgDisplayed = true;
        }
    } else {
        console.log("match");
        form.removeChild(invalidMsgElement);
        isInvalidMsgDisplayed = false;
    }
})