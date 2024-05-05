{
  //generic with interface
  interface Developer<T,X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
    };
    smartWatch: T;
    bike?:X;
  }

  //dynamically parameter pass
  const poorDev: Developer<{ brand: string; model: string; display: string }> =
    {
      name: "Js",
      computer: {
        brand: "Asus",
        model: "asf",
      },
      smartWatch: {
        brand: "EMilab",
        model: "dsfs",
        display: "Amoled",
      },
    };



  //dynamically parameter pass
  //here add interface for apple watch and add this 
  //this is a clean code
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  const richDev: Developer<AppleWatch> = {
    name: "Js",
    computer: {
      brand: "HP",
      model: "asdfsdf",
    },
    smartWatch: {
      brand: "Apple",
      model: "fcvd",
      heartTrack: true,
      sleepTrack: true,
    },
  };


  interface YamahaBike {
    model:string;
    capacity:string
  }
  const richDev1: Developer<AppleWatch,YamahaBike> = {
    name: "Js",
    computer: {
      brand: "HP",
      model: "asdfsdf",
    },
    smartWatch: {
      brand: "Apple",
      model: "fcvd",
      heartTrack: true,
      sleepTrack: true,
    },
    bike:{
        model:'Yamaha',
        capacity:'100cc'
    }
  };



}
