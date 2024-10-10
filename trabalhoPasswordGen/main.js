const passwordInput = document.getElementById("senha");
const lengthDisplay = document.getElementById("length");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const generateButton = document.getElementById("generate");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const strengthIndicator = document.getElementById("strength-indicator");

let passwordLength = 12;

const updateLength = () => {
    lengthDisplay.textContent = passwordLength;
};

decreaseButton.addEventListener("click", () => {
    if (passwordLength > 1) {
        passwordLength--;
        updateLength();
    }
});

increaseButton.addEventListener("click", () => {
    passwordLength++;
    updateLength();
});

generateButton.addEventListener("click", () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let availableCharacters = "";
    if (uppercaseCheckbox.checked) availableCharacters += uppercase;
    if (lowercaseCheckbox.checked) availableCharacters += lowercase;
    if (numbersCheckbox.checked) availableCharacters += numbers;
    if (symbolsCheckbox.checked) availableCharacters += symbols;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }

    passwordInput.value = password;

    calculateStrength(password);
});

const calculateStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)) strength++;

    switch (strength) {
        case 5:
            strengthIndicator.textContent = "Muito forte";
            strengthIndicator.style.color = "green";
            break;
        case 4:
            strengthIndicator.textContent = "Forte";
            strengthIndicator.style.color = "yellow";
            break;
        case 3:
            strengthIndicator.textContent = "Moderada";
            strengthIndicator.style.color = "orange";
            break;
        default:
            strengthIndicator.textContent = "Fraca";
            strengthIndicator.style.color = "red";
            break;
    }
};
