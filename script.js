let btn_1 = document.getElementById('b-1');
let btn_2 = document.getElementById('b-2');
let btn_3 = document.getElementById('b-3');
let btn_plus = document.getElementById('b-plus');
let btn_4 = document.getElementById('b-4');
let btn_5 = document.getElementById('b-5');
let btn_6 = document.getElementById('b-6');
let btn_minus = document.getElementById('b-minus');
let btn_7 = document.getElementById('b-7');
let btn_8 = document.getElementById('b-8');
let btn_9 = document.getElementById('b-9');
let btn_equal = document.getElementById('b-equal');
let btn_0 = document.getElementById('b-0');
let btn_reset = document.getElementById('b-reset');
let screen = document.querySelector('.screen');
let equalIsPushed = false;

btn_1.addEventListener('click', function () {
  if (equalIsPushed) {
    screen.value = ''
    equalIsPushed = false
  }
  screen.value = screen.value + '1';
})

btn_2.addEventListener('click', function () {
  screen.value = screen.value + '2';
})

btn_3.addEventListener('click', function () {
  screen.value = screen.value + '3';
})

btn_plus.addEventListener('click', function () {
  screen.value = screen.value + '+';
})

btn_4.addEventListener('click', function () {
  screen.value = screen.value + '4';
})

btn_5.addEventListener('click', function () {
  screen.value = screen.value + '5';
})

btn_6.addEventListener('click', function () {
  screen.value = screen.value + '6';
})

btn_minus.addEventListener('click', function () {
  screen.value = screen.value + '-';
})

btn_7.addEventListener('click', function () {
  screen.value = screen.value + '7';
})

btn_8.addEventListener('click', function () {
  screen.value = screen.value + '8';
})

btn_9.addEventListener('click', function () {
  screen.value = screen.value + '9';
})

btn_0.addEventListener('click', function () {
  screen.value = screen.value + '0';
})

btn_reset.addEventListener('click', function () {
  screen.value = '';
})

btn_equal.addEventListener('click', function () {
  let expr = screen.value
  screen.value = eval(expr)
  equalIsPushed = true

})

console.log(screen);
