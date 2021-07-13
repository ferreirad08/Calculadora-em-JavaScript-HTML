function equal() {
    var len = Calculator.Input.value.length
    for (var i = 0; i < len; i++) {
        Calculator.Input.value = Calculator.Input.value.replace("^", "**");
        Calculator.Input.value = Calculator.Input.value.replace("×", "*");
        Calculator.Input.value = Calculator.Input.value.replace("π", "3.141592653589793238");
    }
    Calculator.Input.value = eval(Calculator.Input.value);
}

function replace_signal() {
    Calculator.Input.value = Calculator.Input.value.split("").reverse().join("");
}

function del() {
    var len = Calculator.Input.value.length
    Calculator.Input.value = Calculator.Input.value.slice(0, len - 1);
}

function sum(a, b){
    return a + b;
}
 
console.log(sum(1, 2));
console.log(sum('1', '2'));