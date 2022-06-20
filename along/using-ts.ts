const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement; //input확인

function add(num1: number, num2: number) {
  //type추가가 ts의 큰장점
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});
//tsc using-ts.ts js파일생성됨 타입이 제거된
