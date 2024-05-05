"use strict";
{
    // function with generics
    //normal function
    const createArray = (x) => {
        return [x];
    };
    const res = createArray('Jewel');
    //  function with generic
    const createArrayGeneric = (x) => {
        return [x];
    };
    const res1 = createArrayGeneric(true);
    const res2 = createArrayGeneric('Jewel');
    const genericObject = createArrayGeneric({ id: 222, name: 'jewel' });
    //tuple
    const createTuple = (x, y) => {
        return [x, y];
    };
    const tupleAnswer = createTuple('Jewel', 20);
    //ekhane generic er maddhome amra dynamicall student data add korte partesi with fixed course name
    const addCourse = (student) => {
        const course = 'NextLevel';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student = addCourse({ name: 'Js', email: 'aaaaaa@gmail' });
    const student1 = addCourse({ name: 's', email: 'truyu@gmail', hasWatch: 'Apple' });
}
