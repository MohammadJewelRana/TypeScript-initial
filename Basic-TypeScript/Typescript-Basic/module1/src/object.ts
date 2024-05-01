 {
    //reference type

const user : {
    company:'Programming Hero'; //type literal type...fixed or const type
    fName:string;
    mName?: string; //optional chaining ..thakteo pare mName..nao thakte pare
    lName:string;
    isMarried:boolean;
}={
    company:'Programming Hero',
    fName:'MD',
    mName: 'Jewel',
    lName:'Rana',
    isMarried:true,
}

// user.company='PH'//showing error because its fixed cant be change...

user.fName='Suad' //no error because its string


 }



//reference type

const user : {
   readonly company:string; //type literal type...fixed or const type
    fName:string;
 
}={
    company:'Programming Hero',
    fName:'MD',
}
// user.company='PH'//showing error because its fixed cant be change...

 


