 {
    //destructuring

//obj destructuring
const user={
    id:1,
    name:{
        fName:'md',
        lName:'Jewel'
    },
    contact:'017',
    address:'mirpur'
}
const {contact,name:{fName,lName},id}   =user;



//array destructuring
const bros2: string[] = ["Mirzafor", "suad", "tua",'alif'];
const [a,b,c]=bros2;
const [p, ,...restFriend]=bros2;//rest operator





 }
