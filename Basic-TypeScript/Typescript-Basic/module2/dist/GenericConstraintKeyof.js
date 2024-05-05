"use strict";
{
    //here y extends keyof x means y ,x er vitore j j property ase segulo or( | ) korbe
    //jekono ekta nibe and argument pass korar somoy jate match hoy 
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'Jewel',
        age: 23,
        address: 'mirpur'
    };
    const car = {
        model: 'Toyota',
        year: 2010
    };
    const res1 = getProperty(user, 'name');
    const res2 = getProperty(car, 'year');
}
