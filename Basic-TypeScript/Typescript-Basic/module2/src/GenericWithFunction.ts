{

    // function with generics

    //normal function
    const createArray=(x:string) : string[]=>{
        return [x];
    }
    const res=createArray('Jewel');
    

    //  function with generic
    const createArrayGeneric= <T> (x:T) : T[]=>{
        return [x];
    }
    const res1=createArrayGeneric<boolean>(true);
    const res2=createArrayGeneric<string>('Jewel');
    
    //obj
    interface Details{
        id:number;
        name:string
    }
    const genericObject=createArrayGeneric<Details>({id:222,name:'jewel'})
    


    //tuple
    const createTuple=<T,Q>(x:T ,y:Q):[T,Q]=>{
        return [x,y];
    }
    const tupleAnswer=createTuple<string,number>('Jewel',20)



    //ekhane generic er maddhome amra dynamicall student data add korte partesi with fixed course name
    const addCourse=<T>(student:T)=>{
        const course='NextLevel';
        return {
            ...student,
            course
        }
    }
    const student=addCourse({name:'Js',email:'aaaaaa@gmail'})
    const student1=addCourse({name:'s',email:'truyu@gmail' ,hasWatch:'Apple'})


}