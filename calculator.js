const display = document.getElementById('display');

function apprendValue(value) {
    display.value += value
}

function clearDisplay() {
    display.value = '';
}

function deleteValue() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

