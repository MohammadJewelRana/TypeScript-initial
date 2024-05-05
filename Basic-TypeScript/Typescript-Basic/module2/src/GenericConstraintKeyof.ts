{

    //generic constraint with keyof operator

    type Vehicle ={
        bike:string;
        car:string;
        ship:string;
    }
    type Owner='bike' | "car" |"ship" ; //literal type

    type Owner2=keyof Vehicle;//using keyof



    //here y extends keyof x means y ,x er vitore j j property ase segulo or( | ) korbe
    //jekono ekta nibe and argument pass korar somoy jate match hoy 
    const getProperty=<X,  Y extends keyof X >(obj:X,key:Y)=>{
        return obj[key];
    }

    const user={
        name:'Jewel',
        age:23,
        address:'mirpur'
    }
    const car={
        model:'Toyota',
        year:2010
    }

    const res1=getProperty(user,'name')
    const res2=getProperty(car,'year')

    




}