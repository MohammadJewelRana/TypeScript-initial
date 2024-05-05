"use strict";
{
    //constraints means force kora
    //that means kisu fixed kore deoa j oishob property dityei hobe...ulta palta deoa jabe na
    const addCourse = (student) => {
        const course = 'NextLevel';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student = addCourse({ id: 14, name: 'Js', email: 'aaaaaa@gmail' });
    const student1 = addCourse({ id: 83, name: 's', email: 'truyu@gmail', hasWatch: 'Apple' });
    const student3 = addCourse({ emni: 'emni' }); //error dekhabe
    //ekhane name and id extend kora hoyese means ei 2ta property ditei hobe or error ashbe
    const addStudent = (stu) => {
        const isValid = true;
        return Object.assign(Object.assign({}, stu), { isValid });
    };
    const stu1 = addStudent({ name: 'js', email: '@gmail.com', id: 12 });
}
