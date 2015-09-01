
var Addition = function () {

    var num1 = parseInt(document.getElementById('NumberOne').value);
    var num2 = parseInt(document.getElementById('numberTwo').value);
    var ans = num1 + num2;
    document.getElementById('answer').value = ans;
}

var Substraction = function () {

    var num1 = parseInt(document.getElementById('NumberOne').value);
    var num2 = parseInt(document.getElementById('numberTwo').value);
    var ans = num1 - num2;
    document.getElementById('answer').value = ans;
}

var Multiplication = function () {

    var num1 = parseInt(document.getElementById('NumberOne').value);
    var num2 = parseInt(document.getElementById('numberTwo').value);
    var ans = num1 * num2;
    document.getElementById('answer').value = ans;
}

var Division = function () {

    var num1 = parseInt(document.getElementById('NumberOne').value);
    var num2 = parseInt(document.getElementById('numberTwo').value);
    var ans = num1 / num2;
    document.getElementById('answer').value = ans;
}
