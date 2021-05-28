function sum(a, b) {
    return a+b
}

function sum1(a : number, b : number) : number {
    return a+b
}

sum1(10,20);
console.log(sum1(10,20))

// 옵셔널 파라미터
function log(a: string, b: string, ...c:string[]) {
    return console.log(a,b,...c)
}

console.log(log('asd','asdasd','asdasd','asdasd','qweqwe'))