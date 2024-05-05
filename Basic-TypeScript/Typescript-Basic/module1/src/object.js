"use strict";
{
    //reference type
    const user = {
        company: 'Programming Hero',
        fName: 'MD',
        mName: 'Jewel',
        lName: 'Rana',
        isMarried: true,
    };
    // user.company='PH'//showing error because its fixed cant be change...
    user.fName = 'Suad'; //no error because its string
}
//reference type
const user = {
    company: 'Programming Hero',
    fName: 'MD',
};
// user.company='PH'//showing error because its fixed cant be change...
