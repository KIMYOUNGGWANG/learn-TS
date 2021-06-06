interface User {
    age : number;
    name : string;
}

// 변수에 활용한 interface
const YG: User = {
    age :29,
    name : '영광'
}

// 함수(인자)에 활용한 interface
const getUser = (user: User) => {
    console.log(user)
}

const capt = {
    age : 29,
    name : '캡틴'
}
getUser(capt);


// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
    (a:number, b:number) : number;
}

const plus : SumFunction = (a:number,b:number):number => {
    return a+b;
}
console.log(plus(1,2));

// interface의 인덱싱
interface StringArray {
    [index:number]:string;
}
const strArr : StringArray = ['a','b','c'];

// 인터페이스딕셔너리 패턴
interface StringRegexDictionary {
    [key:string] : RegExp
}

const obj2:StringRegexDictionary = {
    // sth :/abc/,
    cssFile : /\.css$/,
    jsFile : /\.js$/
}

Object.keys(obj2).forEach((value)=>{
    console.log(value)
})
