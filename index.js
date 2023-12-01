//////////////////////////////////////
///          원시 데이터 타입          ///

let hi = 'hyukjin'; // 변수
const hello = 'hyukjin'; // 상수 (Default)

const number = 123;
console.log(typeof number);

const bignum = 123n;
console.log(typeof bignum);

const name = 'Kim Hyuk Jin';
console.log(typeof name);

const age = 30;
const job = '개발자';
const msg = '저는 ' + job + '이고, ' + age + '살 입니다.'; // 백틱을 사용하지 않음
const msg2 = `저는 ${job}이고, ${age}살 입니다.`; // 백틱 사용. python의 f string과 비슷한듯
console.log(msg2);

//////////////////////////////////////
///      참조 데이터 타입 (Heap)       ///

const array = [1, 2, 3];
console.log(array[0]);

// key와 value의 쌍을 'property'라고 함.
const obj = {
    name: "김혁진",
    job: "개발자",
    age: "32",
};

console.log(obj);
console.log(obj.name);
console.log(obj['name']);

//////////////////////////////////////
///              연산자             ///

// 산술 연산자: +, -, *, /
// 모듈러
console.log(10 % 2);
console.log(2 ** 3); // 2의 3승

// 증감 연산자
let ten = 10;
ten++;
ten++;
ten--;
console.log(ten);

// 비교 연산자: <, >, <=, >=
// a = 123, b='123
// a == b 결과는 true (추상비교)
// a === b 결과는 false (엄격비교)

// 논리 연산자: &&, ||, !
const a = 2 < 4;
const b = 30 > 50;
console.log(a && b); // 양변의 값이 모두 참이 되어야 true
console.log(a || b); // 양변의 값 중 하나가 참이 되면 true
console.log(!a); // 값을 부정.

// 삼항 연산자: 조건 ? 참일 때 실행될 부분 : 거짓일 때 실행될 부분
console.log(3<2 ? "참" : "거짓"); // 오 신기방기

// 널리쉬 연산자 : null 병합: '??'
const apple = undefined;
const pineapple = null;
const grape = '포도';

console.log(apple ?? grape ?? pineapple);

// 비트연산자: 거의 안 씀

// 대입연산자
let five = 5;
five += 5;

// 전개연산자구문: 반복이 가능한 배열이나 문자열을 펼치는 역할?
const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testNumbers2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(testNumbers)
console.log(...testNumbers) // 오 신기방기

const newNumbers = [...testNumbers, ...testNumbers2]; // 배열을 합쳐줌
const newNumbers2 = [testNumbers, testNumbers2]
console.log(newNumbers);
console.log(newNumbers2);

