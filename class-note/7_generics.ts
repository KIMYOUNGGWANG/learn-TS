// /**
//  * Generic
//  * 
//  */



// logText('logText')

// function logText1<T>(text : T) :T {
//     console.log(text)
//     return text;
// }

// logText1<string>("hi")
// logText1<number>(123)
// logText1<boolean>(false)

// // 기존 타입 정의 방식 vs 제네릭
// // 기존 타입으로 정의를 할 때 함수의 인자를 여러 타입으로 받을 때 함수를 여러개 만들어야 됨
// // 제네릭은 그것을 호출할 때 정의하여 넘겨줄 수 있음.

// function stringText ( text : string) {
//     console.log(text)
//     return text
// }
// function numberText (text : number) {
//     console.log(text)
//     return text
// }

// // 그러면 유니온 타입을 이용하면 되는 것 아니냐?
// function logText2 (text : string | number) {
//     console.log(text)
//     return text
// }
// logText2('logText');
// logText2(2);

// // 이렇게 되면 string 과 number 타입 같이 사용할 수 있는 메서드만 알려줌
// const a = logText2('a')
// // a.split('') 
// // string타입 method를 사용할 수 없다.

// function logText<T>(text:T ):T {
//     console.log(text)
//     return text;
// }

// logText<number>(10);

// // 제네릭을 사용하면 호출 시에 타입지정하여 호출하면 되므로 함수 중복사용 x

// const strstr = logText<string>('a');
// const bool = logText<boolean>(false);


// // 유니온 타입을 이용한 코드

// // interface Email {
// //     value : string;
// //     selected : boolean;
// // }

// // 제네릭을 이용한 인터페이스 활용
// interface DropdownItem<T> {
//     value : T;
//     selected : boolean;
// }

// // const emails1: {value : string, selected:boolean}[] = [
// //     { value: 'naver.com', selected: true },
// //     { value: 'gmail.com', selected: false },
// //     { value: 'hanmail.net', selected: false },
// //   ];
  
// //   const emails1: Email[] = [
// //     { value: 'naver.com', selected: true },
// //     { value: 'gmail.com', selected: false },
// //     { value: 'hanmail.net', selected: false },
// //   ];

//   const emails1: DropdownItem<string>[] = [
//     { value: 'naver.com', selected: true },
//     { value: 'gmail.com', selected: false },
//     { value: 'hanmail.net', selected: false },
//   ];

// interface ProductNumber {
//     value :number;
//     selected : boolean;
// }
// //   const numberOfProducts1 : {value : number, selected:boolean}[] = [
// //     { value: 1, selected: true },
// //     { value: 2, selected: false },
// //     { value: 3, selected: false },
// //   ];

// //   const numberOfProducts1 :ProductNumber[] = [
// //     { value: 1, selected: true },
// //     { value: 2, selected: false },
// //     { value: 3, selected: false },
// //   ];

// const numberOfProducts1 :DropdownItem<number>[] = [
//     { value: 1, selected: true },
//     { value: 2, selected: false },
//     { value: 3, selected: false },
//   ];
  
//   function createDropdownItem1(item:DropdownItem<string>|DropdownItem<number>) {
//     const option = document.createElement('option');
//     option.value = item.value.toString();
//     option.innerText = item.value.toString();
//     option.selected = item.selected;
//     return option;
//   }
  
//   // NOTE: 이메일 드롭 다운 아이템 추가
//   emails1.forEach(function (email) {
//     const item = createDropdownItem1(email);
//     const selectTag = document.querySelector('#email-dropdown');
//     selectTag.appendChild(item);
//   });

//   numberOfProducts1.forEach(function (product) {
//       const item = createDropdownItem1(product);
//   })

//   // 인터페이스에 제네릭을 선언하는 방법

//   interface DropdownInterface {
//       value:string ;
//       selected : boolean;
//   }

//   const k : DropdownInterface = {value : 'abc', selected : false}

//   interface DropdownGeneric<T> {
//       value : T;
//       selected : boolean;
//     }

//     const g : DropdownGeneric<string> = {value : 'abc', selected : false};
//     const n : DropdownGeneric<number> = {value : 10, selected : false};

// function logText<T>(text:T):T{
//   console.log(text)
//   return text;
// }

// logText<number>(10);
// logText<string>("string");
// logText<boolean>(true);

// 기존 타입 정의 방식과 제네릭의 차이점
// function logText(text:string) {
//   console.log(text);
//   text.split("").reverse().join('');
//   return text;
// }

// logText('a');
// logText(10);
// logText(true)

// function logNumber(number:number) {
//   console.log(number)
//   return number;
// }

// logNumber(10);
// logNumber("10");

// 함수내용은 같은데 단지 타입이 달라서 여러개의 함수를 사용하는 것은 유지보수면에서 정말 좋지 않다.
// 그러면 유니온타입을 사용해보자

function logText(text : string | number){
  text
  return text;
}

logText("100");
logText(100);

const a = logText("a");
console.log(a)
// a는 string | number 타입이기 때문에 a.split()을 사용할 수 없다.

//제네릭의 타입 제한
interface Dropdown<T>{
  value : T;
  selected : boolean;
}

// const obj:Dropdown<number> = {value:'sss',selected:true};

function logTextLength<T>(text:T[]):T[]{
  console.log(text.length)
  text.forEach(el=>console.log(el))
  return text
}

logTextLength<string>(['hi','ㅁㄴㅇㅁㄴㅇ']);

interface LengthType {
  length : number;
}

// 제네릭 타입 제한 3 - key of
interface ShoppingItem {
  name : string;
  price : number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{
   return itemOption
}

// getShoppin gItemOption(10);
// getShoppingItemOption(true);
// getShoppingItemOption<string>("a");
