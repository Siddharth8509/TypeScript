//Examples of type annotations(Explicit types) given by us where we explicitly mention the type of something

//Example 1: Variable annotation

let username: string = "Siddharth";
let score: number = 95;
let isLoggedIn: boolean = true;

// score = "95"; // ❌ error as the type of score is number and not a string

//Example 2 : Function annotations , here we are explicitly mentioning the return type the function will give in this case its a number 

function add( a : number , b : number ) : number {
    return a+b;
}

//Example 3 : Arrays

let marks : number[] = [90,80,70];
//marks.push("100"); --> an error will be thrown as our marks array only takes number as input

//Example 4  : Objects

let user : {name : string , age : number} = {
    name : "Siddharth",
    age : 20
}

//Type Inference  :- Types that typescript automatically figure out for us

let city = "Nashik" 
// -> Here typescript infers let city : string , so city = 123 fails if we try to update it afterwards in out code

function multiply(a : number , b : number){
    return a*b;
}

//Here typescript infers return type as number