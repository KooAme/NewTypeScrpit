var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2'); //input확인
function add(num1, num2) {
  //type추가가 ts의 큰장점
  return num1 + num2;
}
button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});
