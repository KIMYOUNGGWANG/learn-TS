/**
 * 타입호완이란?
 * 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미
 */

interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
}

var developer1: Developer2;
var person1: Person2;
developer1 = person1;

// person은 속성이 name, developer은 skill이 더 있기때문에 오른쪽이 더 속성이 많아야함(구조적으로)

person1 = developer1;

// 구조적으로 큰 타입이 오른쪽, 작은 타입이 왼쪽에 있어야 지원이 가능하다.
