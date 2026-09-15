// Professional Calculator with Keyboard Support
// Add this script before </body> in your HTML

const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    if (["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    }

    // Enter = Calculate
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = Delete
    if (key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    if (key === "Escape") {
        clearDisplay();
    }
});