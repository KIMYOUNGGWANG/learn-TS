// a의 타입이 string이라고 자동적으로 ts가 인식함
var a = "abc";

// 함수는 b가 any이기때문에 리턴값은 자동적으로 any를 반환함
const getB = b => {
  return b;
};

// 인자로는 number가 들어오지만 , js특성상 number+string 는 string(1010) 이 된다.
const getC = (c = 10) => {
  const d = "10";
  return c + d;
};

interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
  //value,
  //title
}
// DetailedDropdown<string>을 넣는다면 K에 모두 string이 들어간다.
// extends한 interface에는 다른 타입을 넣어주고싶으면 k말고 다른타입 넣어주면 된다.

// var shoppingItem: Dropdown<string> = {
//   value: "abc",
//   title: "hello",
// };

const detaildItem: DetailedDropdown<string> = {
  title: "abc",
  description: "abc",
  value: "10",
  tag: "ssss",
};

// Best Common Type : 가장 근접한 타입을 추론(union)
const arr = [1, 2, true];
