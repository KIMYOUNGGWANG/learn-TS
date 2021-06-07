// enum은 특정 값들의 집합을 의미하는 자료형
// 문자형과 숫자형을 지원한다.


//1. 숫자형 enum
enum Shoes {
    Nike,
    Adidas,
}

const myShoes = Shoes.Adidas;
console.log(myShoes);


// 2. 문자형 enum
enum Shoes1 {
    Nike = "나이키",
    Adidas = "아디다스"
}

const myShoes1 = Shoes1.Adidas;
console.log(myShoes1)