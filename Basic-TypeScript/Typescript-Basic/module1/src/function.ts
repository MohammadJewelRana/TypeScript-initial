//normal function


function add(num1: number , num2 : number) :number //it is a return type
{
    return num1+num2;
}
add(2,2);

//set default value
function sub(num1: number =10, num2 : number) :number //it is a return type
{
    return num1+num2;
}
sub(2,2);



//arrow function
const addArrow=(num1:number , num2:number): number=>num1+num2;


//method
//object er vitor e function thakle thake method bole
const poorUser={
    name:'Jewel',
    balance: 200,
    addBalance(balance:number):string{
        return `My new balance is ${this.balance+balance}` ;
    }
}


const arr :number[]=[1,4,2,10];
const newArray : number[]=arr.map((ele:number):number=>ele*ele)