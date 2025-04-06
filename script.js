let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === "") return;
        display.value = eval(display.value.replace('%', '/100')); // Handles percentage
    } catch (error) {
        display.value = "Error";
    }
}
