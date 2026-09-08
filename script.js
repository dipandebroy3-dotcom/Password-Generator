// ===============================
// Inputs
// ===============================

const range = document.getElementById("range");
const length = document.getElementById("livelength");


// ===============================
// Checkboxes
// ===============================

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const charecter = document.getElementById("charecter");
const number = document.getElementById("number");


// ===============================
// Submit Button & Output
// ===============================

const button = document.getElementById("Submit");
const password_out = document.getElementById("password");


// ===============================
// Character Sets
// ===============================

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LOWER = "abcdefghijklmnopqrstuvwxyz";

const NUM = "0123456789";

const CHAR = "!@#$%^&*()_+-=[]{}|;:,.<>?";


// ===============================
// Live Password Length
// ===============================

range.addEventListener("input", function () {

    length.textContent = range.value;

});


// ===============================
// Generate Password
// ===============================

button.addEventListener("click", function () {

    // Empty character pool
    let characters = "";


    // Check selected requirements

    if (uppercase.checked) {
        characters += UPPER;
    }

    if (lowercase.checked) {
        characters += LOWER;
    }

    if (number.checked) {
        characters += NUM;
    }

    if (charecter.checked) {
        characters += CHAR;
    }


    // Nothing selected

    if (characters === "") {

        password_out.value = "Select at least one option";

        return;
    }


    // Generate password

    let password = "";


    for (let i = 0; i < Number(range.value); i++) {

        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];

    }


    // Display password

    password_out.value = password;

});