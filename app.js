// DOM elements
const passwordInput = document.querySelector(".password__input");
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".password__copy");

// Character sets
const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "@#$%^&*()_+=|{}[]<>/-";

// Constants
const PASSWORD_LENGTH = 8;

// Generate a secure random password with required character types
function generatePassword() {
    let password = "";

    // Ensure inclusion of at least one character from each set
    password += getRandomChar(UPPER_CASE);
    password += getRandomChar(LOWER_CASE);
    password += getRandomChar(NUMBERS);
    password += getRandomChar(SYMBOLS);

    // Fill the rest of the password with random characters from all sets
    const allChars = UPPER_CASE + LOWER_CASE + NUMBERS + SYMBOLS;
    for (let i = password.length; i < PASSWORD_LENGTH; i++) {
        password += getRandomChar(allChars);
    }

    // Shuffle the password to avoid predictable positions
    password = shuffle(password);

    // Set the generated password in the input
    passwordInput.value = password;
}

// Helper function to get a random character from a given string
function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
}

// Shuffle the password to avoid predictable patterns
function shuffle(string) {
    return string.split('').sort(() => Math.random() - 0.5).join('');
}

// Copy the password to the clipboard with a check for empty input
function copyPassword() {
    if (passwordInput.value) {
        navigator.clipboard.writeText(passwordInput.value).then(() => {
            alert("Password copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy password. Please try again.");
        });
    } else {
        alert("No password to copy!");
    }
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
