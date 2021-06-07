const logMessage = (value:string) => {
    console.log(value)
} 

logMessage("hello")

// union type(|연산자)
const unionType = (value:string | number) => {
    console.log(value)
}

unionType('string');
unionType(1000)

interface Person1 {
    name : string;
    skill : string;
}

interface Developer1 {
    name : string;
    age : number;
}

const askSomeone = (someone : Developer1 | Person1) => {
    someone.name;
   
}

askSomeone({name : "YG",  age : 29})

// intersection type(&연산자?)
const askSomeone1 = (someone : Developer & Person) => {
    someone.name;
    someone.skill;
    someone.age;
}
