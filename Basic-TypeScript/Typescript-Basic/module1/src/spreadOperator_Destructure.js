"use strict";
//spread operator
const bros1 = ["Mir", "firoz", "js"];
const bros2 = ["Mirzafor", "suad", "tua"];
bros1.push(...bros2); //spread operator
const mentors = {
    typeScript: "Js",
    redux: "mir",
};
const mentors2 = {
    prisma: "suad",
    nextJS: "Tonmoy",
};
//destructuring using spreadoperaors
const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
//rest operators
//here create an friends array using rest operator 
//here all single friends attach in array 
const greetFriends = (...friends) => {
    friends.forEach((element) => {
        console.log(element);
    });
};
greetFriends('js', 'hs', 'ps', 'ps', 'qs');
// const greetFriends = (f1: string, f2: string, f3: string) => {
//   console.log(`Hi ${f1} , ${f2} ${f3}`);
// };
// greetFriends('js','hs','ps' )
