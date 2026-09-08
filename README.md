🔐 Password Generator

A simple and responsive Password Generator built using HTML, CSS, and JavaScript. The application allows users to customize their passwords by selecting different character types and choosing the desired password length.

✨ Features
🔠 Include uppercase letters (A-Z)
🔡 Include lowercase letters (a-z)
🔢 Include numbers (0-9)
🔣 Include special characters (!@#$)
🎚️ Adjustable password length using a range slider
🔢 Displays the current password length
⚡ Generates a random password instantly
📱 Responsive design for mobile and desktop
🎨 Modern dark-themed user interface
🛠️ Technologies Used
HTML5 — Structure of the application
CSS3 — Styling, layout, and responsive design
JavaScript — Password generation and user interaction
📂 Project Structure
Password-Generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
🚀 How It Works
Select the character types you want to include.
Set the desired password length using the slider.
Click the Submit button.
JavaScript creates a character pool based on your selections.
Random characters are selected from that pool.
The generated password is displayed in the output field.
🧠 JavaScript Logic

The application uses different character sets:

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const CHAR = "!@#$%^&*()_+-=[]{}|;:,.<>?";

The selected character sets are combined into one character pool:

let characters = "";

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

Then a random character is selected repeatedly until the desired password length is reached.

🎯 Future Improvements

Some features that can be added in future versions:

📋 Copy password button
💪 Password strength indicator
🔄 Regenerate password button
🚫 Exclude similar characters
🔢 Guarantee at least one character from every selected category
🌗 Light/Dark mode
🔐 Stronger cryptographic random generation
📸 Preview

A clean dark-themed password generator with customizable requirements and password length.

👨‍💻 Author

Dipan Debroy
