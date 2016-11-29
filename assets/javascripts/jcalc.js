var calcButtons = document.getElementsByClassName('calc-button');
var resultDiv = document.getElementById('result')
resultDiv.innerHTML = '0'
var num1 = ""
var num2 = ""
var result
var operator = null
var operators = ['+', '-', '/', '*']
var clear

for(var i = 0; i < calcButtons.length; i++) {
  var calcButton = calcButtons[i];
  calcButton.addEventListener('click', function(){
    buttonClick();
  });
}

function Clear() {
            document.getElementsByClassName('clear').result = "";

        }

function calc() {
  //var calcButtons = document.getElementsByClassName('calc-button');
  //var num1 = ""
  //var num2 = ""
  //var result;
  // check num1 num2 & operator
  switch(operator) {
      case "+":
        result = num1 + num2;
      break;
      case '-':
        result = num1 - num2;
      break;
      case '*':
        result = num1 * num2;
      break;
      case '/':
        result = num1 / num2;
      break;
    }
    resultDiv.innerHTML = result
    num1 = result
    num2 = ''
    operator = null
    result = null
}

function buttonClick() {
    var input = event.target.innerHTML.trim()
    if (input === '=') {
      calc()
      return;
    }
    if (operators.includes(input)) {
      operator = input
      resultDiv.innerHTML = operator
    } else if (operator === null) {
      num1 = num1 += input
      resultDiv.innerHTML = num1
    } else {
      num2 = num2 += input
      resultDiv.innerHTML = num2
    }
}
