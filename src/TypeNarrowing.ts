//"A type guard is a technique that helps TypeScript determine the exact type of a value at runtime when that value has a union type." 

//"Type narrowing is the process where TypeScript reduces a broader type into a more specific type inside a certain block of code , Type narrowing means telling TypeScript exactly which type you’re dealing with at a given moment."


/* 
    function printLength(value : number | string){
        return value.length;
    }
    This example is worng as if the value is number we cannot operate .length function on a number
*/
//correct way
function printLength(value : string | number){
    if( typeof value === "string" )
        return value.length;

    else 
        return value.toString().length;
}


//Example 2 :- Truthiness Narrowing

function printName(name : string | null)
{
    if(name)
        console.log(`Hello ${name}`)
    else
        console.log("Plase enter your name");
}
printName("Siddharth"); // -> Will print "Hello Siddharth"
// printName();-> Will print "Plase enter your name"


//Example 3 :- in Operator Narrowing (Objects) , for checking if a property exists

type Admin = {
  permissions: string[];
};

type User = {
  email: string;
};

type Person = Admin | User;

function handlePerson(person: Person) {
  if ("permissions" in person) {
    // 👇 TypeScript now knows: person is Admin
    console.log("Admin permissions:", person.permissions);
  } else {
    // 👇 TypeScript now knows: person is User
    console.log("User email:", person.email);
  }
}

const admin: Admin = {
  permissions: ["read", "write", "delete"],
};

const user: User = {
  email: "user@example.com",
};

handlePerson(admin);
handlePerson(user);

//Example 4 : instanceof { type narrowing example }

class CreditCardPayment {
  cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number) {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}

class UPIPayment {
  upiId: string;

  constructor(upiId: string) {
    this.upiId = upiId;
  }

  pay(amount: number) {
    console.log(`Paid ₹${amount} using UPI`);
  }
}
