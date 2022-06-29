function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is : ';
//이곳에 타입은 지정하지않음. 이유는 타입추론(type inference) 이라는 내장 기능을 활용하기 때문임
//특정 변수나 상수에 어떤 타입을 사용했는지를 타입스크립트는 아주 잘 이해하고 있음
//겹치기도 하고 좋은 작업방법 아님. 완벽하게 추론할 수 있기 때문에 , 타입값을 지정하는건 좋은 방법이 아님

const result = add(number1, number2, printResult, resultPhrase);
