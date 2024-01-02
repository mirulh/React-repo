/*
function handleNumber(n) {
  runningTotal = runningTotal + n;
  console.log(runningTotal);
  screen.innerText = runningTotal;
}

function handleSymbol(n) {
  if (n === 'C') {
    console.log('clear button clicked');
    runningTotal = 0;
    screen.innerText = runningTotal;
  } //
  else if (n === '←') {
    console.log('backspace button clicked');
    runningTotal = runningTotal.substring(0, runningTotal.length - 1);
    screen.innerText = runningTotal;

    console.log(runningTotal);
  } //
  else if (n === '=') {
    console.log('total button clicked');
  } //
}

function handleOperation(n) {
  console.log(n);
  if (n === '+') {
    runningTotal = runningTotal + '+';
    console.log(runningTotal);
  } //
  else if (n === '-') {
    runningTotal = runningTotal + '-';
    console.log(runningTotal);
  }
}
*/

// variables

// let runningTotal = 0;

// DOM
const buttons = document.querySelectorAll('.calc-button');
const screen = document.querySelector('.screen');
// let heldValue = 0;

// let displayTotal = 0;

// let previousOperator;

// let trimmedNumber = () => {
//   return parseInt(runningTotal, 10);
// };

// function checkEmpty(n) {
//   if (isNaN(n)) {
//     // rerender();
//     console.log('empty now');
//   } else {
//     return runningTotal;
//   }
// }

// function handleMath(symbol) {
//   if (heldValue === 0) {
//     heldValue = runningTotal;
//     console.log('heldValue = runningTotal');
//     runningTotal = 0;
//   }
//   previousOperator = symbol;
//   console.log('previous Operator', previousOperator);
//   handleOperation(previousOperator);
// }

// function handleOperation(value) {
//   console.log(`you clicked ${value}`);
//   if (value === '+') {
//     // if (heldValue === 0) {
//     //   heldValue = runningTotal;
//     //   runningTotal = 0;
//     //   console.log('held value, 0:', heldValue);
//     //   console.log('running total:', runningTotal);
//     // } else {
//     //   heldValue = heldValue + runningTotal;
//     //   displayTotal = heldValue;
//     //   runningTotal = 0;
//     //   console.log('held value:', heldValue);
//     //   console.log('running total:', runningTotal);
//     // }
//     heldValue = heldValue + runningTotal;
//     console.log('held value now:', heldValue);
//     console.log('running total now', runningTotal);
//     console.log('running addition');
//   } //
//   else if (value === '-') {
//     console.log('running subtraction');
//   } //
//   else if (value === '×') {
//     console.log('running multiplication');
//   } //
//   else if (value === '÷') {
//     console.log('running division');
//   }
// }

// function handleSymbol(value) {
//   if (value === '←') {
//     let str = runningTotal.toString();
//     str = str.substring(0, str.length - 1);
//     runningTotal = str;
//     // console.log(isNaN(runningTotal));

//     if (runningTotal === '') {
//       runningTotal = 0;
//       rerender();
//     } //
//     else if (!isNaN(runningTotal)) {
//       screen.innerText = runningTotal;
//     }
//   } //
//   else if (value === 'C') {
//     runningTotal = 0;
//     rerender();
//   } //
//   else if (value === '=') {
//     console.log('you pressed equal!');
//     screen.innerText = displayTotal;
//   }
// }

// function handleNumber(n) {
//   runningTotal = runningTotal + n;
//   runningTotal = trimmedNumber();
//   screen.innerText = runningTotal;
//   // screen.innerText = trimmedNumber();
//   console.log('running total:', runningTotal);
// }

// function buttonClick(value) {
//   handleOperation(previousOperator);
//   if (value === '+' || value === '-' || value === '×' || value === '÷') {
//     rerender();
//     // handleOperation(value);
//     handleMath(value);
//   } //
//   else if (isNaN(value)) {
//     console.log('is a symbol');
//     handleSymbol(value);
//   } //
//   else {
//     console.log('is a number');
//     handleNumber(value);
//   }
// }

// function rerender() {
//   screen.innerText = 0;
// } // my trial and errors

let buffer = '0';

let heldValue = 0;

let previousOperator;

function handleSymbol(symbol) {
  if (symbol === 'C') {
    buffer = '0';
  } //
  else if (symbol === '←') {
    buffer = buffer.toString();
    buffer = buffer.substring(0, buffer.length - 1);
    if (buffer === '') {
      buffer = '0';
    }
  } //
  else if (symbol === '=') {
    handleOperation();
    previousOperator = null;
    buffer = heldValue;
    heldValue = 0;
  } else if (
    symbol === '+' ||
    symbol === '-' ||
    symbol === '×' ||
    symbol === '÷'
  ) {
    handleMath(symbol);
    console.log('operation is clicked');
  }
}

function handleMath(symbol) {
  if (buffer === '0') {
    // preventing operators from being used when buffer value = 0
    return;
  }
  if (heldValue === 0) {
    heldValue = buffer;
    console.log('heldvalue, 0 now:', heldValue);
  } //
  else {
    handleOperation();
    console.log('handleOperation starts');
  }
  previousOperator = symbol;
  buffer = '0';
}

function handleOperation() {
  if (previousOperator === '+') {
    console.log('addition operation');
    heldValue = heldValue + buffer;
    console.log('total:', heldValue);
  } //
  else if (previousOperator === '-') {
    console.log('subtraction operation');
    heldValue = heldValue - buffer;
    console.log('total:', heldValue);
  } //
  else if (previousOperator === '×') {
    console.log('multiplication operation');
    heldValue = heldValue * buffer;
    console.log('total:', heldValue);
  } //
  else if (previousOperator === '÷') {
    console.log('division operation');
    heldValue = heldValue / buffer;
    console.log('total:', heldValue);
  }
}

function handleNumber(num) {
  buffer = buffer + num;
  let intBuffer = parseInt(buffer);
  buffer = intBuffer;
}

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } //
  else {
    handleNumber(value);
    console.log('num:', value);
  }
  screen.innerText = buffer;
  console.log('screen and buffer:', buffer);
}

function init() {
  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      buttonClick(e.target.innerText);
    });
  });
}

init();
