{
  //interface
  //type alias er motoi
  //ekhane type er jaygay  interface use hoy

  //type alias
  type User1 = {
    name: string;
    age: number;
  };
  const user1: User1 = {
    name: "Jewel",
    age: 12,
  };

  //interface
  interface User2 {
    name: string;
    age: number;
  }
  const user2: User2 = {
    name: "Jewel",
    age: 12,
  };


  //intersection
  type UserWithRole=User2 & {role : string};
  const user3: UserWithRole = {
    name: "Jewel",
    age: 12,
    role: 'Admin'
  };

//using interface
  interface UserWithRole2 extends User2{
    role :string;
  }
  const user4: UserWithRole2 = {
    name: "Jewel",
    age: 12,
    role: 'Admin'
  };



//array

//using type
type Roll1=number[]; //number array type declare
const rollNumber1=[1,2,3];


//using interface
interface Roll2{
    [index : number] : number; //array te index thake..ekhane index number hoy tai number deoa ase ....and porer number holo number type array
}
const roll2 :Roll2 = [1,2,2];



//function

//normal type function
type Add=(x:number , y :number)=>number;
const add :Add=(x,y)=>x+y;


//using interface
interface Add2{
    (x:number, y : number):number;//here last er nmber holo return type
}
const add2 :Add2=(x,y)=>x+y;




//kokhon konta use
//type alias==> array , function
//interface:: object, intersection





}
