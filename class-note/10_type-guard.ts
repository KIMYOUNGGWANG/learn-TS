interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: "tony", age: 33, skill: "react" };
};

const tony = introduce();
console.log(tony.skill);

// tony는 Developer로 반환되었는지 Person으로 반환되었는지 모르기때문에
// 공통적으로 가지고있는 name만 사용 가능.

if ((tony as Developer).skill) {
  const skill = (tony as Developer).skill;
} else if ((tony as Person).age) {
  const age = (tony as Person).age;
}

//이런식으로 접근을 해야하기 때문에 코드가 지저분해진다. 이걸 해결하는게 타입 가드

// 타입가드 정의
const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

if (isDeveloper(tony)) {
  tony.skill;
} else {
  tony.name;
}
