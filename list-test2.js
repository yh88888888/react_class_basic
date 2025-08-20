let list = [
    { id: 1, name: '홍길동', age: 20, addr: '서울', tel: '010-1111-1111' },
    { id: 2, name: '이순신', age: 30, addr: '부산', tel: '010-2222-2222' },
    { id: 3, name: '강감찬', age: 40, addr: '대전', tel: '010-3333-3333' },
];

// 1. 추가
let t1 = [...list, { id: 4, name: '유관순', age: 50 }];
console.log(t1);

// 2. 검색
let t2 = list.filter((i) => i.name == '이순신');
console.log(t2);

// 3. 삭제
let t3 = list.filter((i) => i.age >= 30);
console.log(t3);

// 4. 수정 (id:3번의 age를 70으로) - 잘못된 코드
let t4 = list.map((user) => {
    if (user.id != 3) {
        return user;
    } else {
        user.age = 70;
        return user;
    }
});

console.log(t4);
console.log('--------------------------------');
console.log(list);

// 5. 수정 (id:1번의 age를 70으로) - 정상 코드 (안좋은 코드)
let t5 = list.map((user) => {
    if (user.id != 1) {
        return user;
    } else {
        let newUser = {
            id: user.id,
            name: user.name,
            age: 70,
            addr: user.addr,
            tel: user.tel,
        };
        return newUser;
    }
});

console.log(t5);

// 6. 수정 (id:2번의 age를 70으로) - 정상 코드 (좋은 코드)

let board = {
    id: 1,
    title: '제목',
    content: '내용',
    writer: '홍길동',
    regDate: '2025-08-20',
    hit: 0,
};

let newBoard = { ...board, title: '새제목' };
console.log(board);
console.log(newBoard);

// 7. 수정 (id:1번의 addr을 제주)
let t7 = list.map((user) => (user.id === 1 ? { ...user, addr: '제주' } : user));

console.log(t7);
