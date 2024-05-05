{

    //constraints means force kora
    //that means kisu fixed kore deoa j oishob property dityei hobe...ulta palta deoa jabe na

    const addCourse=<T extends {id:number,name:string}>(student:T)=>{
        const course='NextLevel';
        return {
            ...student,
            course
        }
    }
    const student=addCourse({id:14,name:'Js',email:'aaaaaa@gmail'})
    const student1=addCourse({id:83,name:'s',email:'truyu@gmail' ,hasWatch:'Apple'})
    const student3=addCourse({emni:'emni'})//error dekhabe





    //ekhane name and id extend kora hoyese means ei 2ta property ditei hobe or error ashbe
    const addStudent=<T extends {name:string, id:number}>(stu:T)=>{
        const isValid : boolean=true;
        return {
            ...stu,
            isValid   
        }
    }
    const stu1=addStudent({name:'js',email:'@gmail.com',id:12})


}