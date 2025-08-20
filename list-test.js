let list = [1, 2, 3, 4, 5];

// 1. 추가
let t1 = [0, ...list, 6];
// ... 흩뿌리기는 껍데기를 벗기는 역할

console.log(t1);

// 2. 검색
let t2 = list.filter((item) => item > 3);
console.log(t2);
// filter는 찾아서

// 3. 삭제

let t3 = list.filter((t2) => t2 != 4);
console.log(t3);

// 4. 수정
let t4 = list.filter((item) => item * 2);
console.log(t4);
