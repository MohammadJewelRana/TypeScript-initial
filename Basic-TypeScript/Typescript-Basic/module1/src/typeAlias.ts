{

    //type declare
    type User={
        id:number;
        contact:string;
        address:string;
        balance?:number; //optional sobar thakbe na..bakigula common tai optional e nai
    }

    //two user
    //where we use upper type user
    const user : User={
        id:1,
        contact:'017',
        address:'mirpur',
        balance:0
    }
    const user2 : User ={
        id:2,
        contact:'015',
        address:'tangail'
    }



    type IsAdmin=boolean; //type declare for admin
    const isAdmin : IsAdmin=true;//use type




    //function

    type Add=(num1: number, num2:number)=> number;//means num1 and num2 holo number type er data and last e arrow diye bujhano hosse number type data return
    
    const add : Add=(num1,num2)=>num1+num2;


}