{
    //utility type

    //pick
    //existing type theke jake jake doekar niye asha
    type Person={
        name:string;
        age:number;
        email?:string;
        phone:string
    }
    //ekhane name and age k pick kore ana hoyese
    type NameAge=Pick<Person, 'name' | 'age' >


    //Omit
    //pick er ulta ta
    //jake jake omit e dibo segula bad diye bakigula dibe
    type ContactInfo=Omit <Person, 'name' | 'age'>


    //required
    //person type e require optional jai thakuk sob require kore dibe
    type PersonRequired=Required<Person>

    //partial
    type PersonPartial=Partial<Person>


    //readonly type
    type Person1={
        name:string;
        age:number;
        email?:string;
        phone:string
    }
    type PersonReadOnly=Readonly<Person1>


    //record
    type MYOBJ={
        a:string;
        b:string;
    }

    type MyObj=Record<string,string>//ekhane first string means key..which always string....2nd string casn be change..it is value 

    const obj1 : MyObj={
        a:'ffd',
        b:'df'
    }

    //object er somoy use hobe
    //obj er key always string hobe
    //value jekono kisu hote pare tai unknown boshse
    const EmptyObj :Record<string,unknown>











}