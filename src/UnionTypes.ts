//A value can be of mulitple types that's where we use union types where we can assign more than one type to a value instead of forcing a one single type. syntax -> TypeA | TypeB , Union types allow a variable or parameter to accept multiple types, improving flexibility while maintaining type safety.

//Example 1 : Variable

let subs : number | string ;
subs = 100;
subs = "1M";
//Both of the above values are true in this case as it accepts both number and string

//Example 2 : Function parameter

function printID( id : number | string )
{
    console.log(id);
}
printID(1);
printID("Sid");
//Both of them are valid

//Example 3 : Arrays

let values : (number | string)[] = [1,"two",3];


/*Example 4 : Function return values, Forces caller to handle null safely.
function getUser(id: number): User | null {
  return id > 0 ? { id, name: "Siddharth" } : null;
}

*/

//Union types with literal values

type Role = "admin" | "user" | "guest";
let role: Role;
role = "admin";  // ✅
// role = "owner"  ❌ throws error