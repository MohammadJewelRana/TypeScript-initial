{

    //generic type
    //type k dynamic vabe change or reuse kora

    //normally array declare
    const roll : number[]=[3,453,5];
    const mentors : string []= ['j','sd'];
    const boolArray : boolean[]=[true,false,true];


    //we can write also in this way
    const roll1 :  Array<number> =[3,453,5];
    const mentors1 : Array<string>  = ['j','sd'];
    const boolArray1 : Array<boolean>=[true,false,true];


    const add =(x:number,y:number)=>x+y;



    //dynamically array type declare using generic
    type GenericArray<T>=Array<T>; //here T is a params which we get from the array dynamically

    const roll3 :  GenericArray<number> =[3,453,5];
    const mentors3 : GenericArray<string>  = ['j','sd'];
    const boolArray3 : GenericArray<boolean>=[true,false,true];



    //obj
    const user : GenericArray<{name:string,age:number}> = [
        {name:'JS', age :100},
        {name:'S', age : 20},
    ]


    //generic tuple
    type GenericTuple<X,Y>=[X,Y];
    const manush : GenericTuple<string,string> =['x','y'];    
    const userWIthId : GenericTuple<number,{name:string,email:string}> =[345,{name:'js',email:'d@'}] //generic array tupe with number and object..and reuse upper tuple in two things
           
    
    //use type to simplify
    //use type in generic
    type User={
        des: string;
        area: string;
    }
    type GenericNewTuple<P,Q,R,S>=[P,Q,R,S];
    const details : GenericNewTuple<string,number,number,User>=['Jewel',205,405,{des:'developer',area:'Dhaka'}]
     





}