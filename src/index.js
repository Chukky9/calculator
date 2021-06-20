import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Operation from './arithmetic';

const display = document.getElementById("display");

const MyGame = (function() {
    let info = '';
    let num1 = '';
    let num2 = '';
    let operator = '';
    let result = '';
    let resultInfo = '';
    let delNumber = '';
    let delValue = '';
    
    const showDisplay = function(val) {
        if (display.value == resultInfo) {
             info = '';
         }
         info += val;
         display.value = info;
     };

     const delVal = function() {
        if (resultInfo == Number(display.value)) {
            return false;
        } else {
            delNumber = info.toString();
            delValue = delNumber.substring(0, delNumber.length - 1);
            info = delValue;
            display.value = info;
        }
    };

    const arithmetic = function(mathSign) {
        if (isNaN(info)) {
            display.value = "That won't work...";
        } else if (num1 != '') { 
            num2 = Number(info); 
            display.value = Operation.operate(operator, num1, num2); 
            num1 = Number(display.value);
            operator = mathSign;
            info = '';
            resultInfo = '';
        } else {
        num1 = Number(info);
        operator = mathSign;
        info = '';
        resultInfo = '';
        }
    };

    const equalTo = function() {
        if (num1 == '' && num2 == '') {
            display.value = "That won't work..."
        } else {
            result = Operation.result;
            num2 = Number(info);
            display.value = Operation.operate(operator, num1, num2);
            info = Number(display.value);
            resultInfo = Number(display.value);
            num1 = '';
            num2 = ''; 
        }
    };

    const clrDisplay = function() {
        info = '';
        num1 = '';
        num2 = '';
        operator = '';
        result = '';
        resultInfo = '';
        delNumber = '';
        delValue = '';
        display.value = '';
    };
    return { delVal, clrDisplay, arithmetic, showDisplay, equalTo };
})();

document.querySelectorAll(".numeric-btn").forEach(btn => btn.addEventListener("click", function() {
    MyGame.showDisplay(btn.getAttribute("value"));
}));

document.querySelectorAll(".arithmetic").forEach(btn => btn.addEventListener("click", function() {
    MyGame.arithmetic(btn.getAttribute("value"));
}));

document.querySelector(".equals").addEventListener("click", function() {
    MyGame.equalTo();
});

document.querySelector("#del-btn").addEventListener("click", function() {
    MyGame.delVal();
});

document.querySelector("#ac-btn").addEventListener("click", function() {
    MyGame.clrDisplay();
});