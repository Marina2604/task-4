function calculator() {

    let number1 = prompt("choose first number");
    let number2 = prompt("choose second number");
    let operator = prompt("choose + or -");
    let result;

    if (operator == "-") {
        result = parseInt(number1) - parseInt(number2);
    }
    if (operator == "+") {
        result = parseInt(number1) + parseInt(number2);
    }

    alert(result);
} 