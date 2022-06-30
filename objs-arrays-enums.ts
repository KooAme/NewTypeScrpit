// const person: {
//   //객체타입의 영할, 객체라고 알려줌. 타입스크립트에서의 객체타입을 이해하게 하기.
//   name: string;
//   age: number;
// } = {
//작업중인 객체를 타입스크립트가 이해할 수 있도록 해주는 객체 타입의 타입스크립트 표현일 뿐 ! 자바스크립트 객체가 아님
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //튜플 , 특수배열을 입력해야만 함
// } = {
//   name: 'Koo',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'], //hobbies에 마우스 대면 이미 string으로 인식. 이것이 TS가 추론한 타입.
//   role: [2, 'author'], //튜플은 항상 두개의 요소만 지녀야 함
//   //배열이 있고 그 안에 문자열이 있다는 걸 추론한것.
// };
const person = {
  name: 'Koo',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: 1,
};

person.role.push('admin'); //두요소 지정해야함.
// person.role[1] = 10; //이렇게 해야만 작동함

//let favoriteActivities: string[];
//favoriteActivities = ['Sports',1]; //이렇게 하면 에러 생김.
//혼합된 배열을 작동하고자 한다면 any를 사용하면 됨.

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
  //가능
}
