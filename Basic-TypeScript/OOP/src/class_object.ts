{
  //class
  class Animal {
    //property
    public name: string;
    public species: string;
    public sound: string;

    //constructor
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }


    //method
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  //create instance
  const dog = new Animal("german", "dog", "Ghew");
  dog.name = "kukur"; //we can access and change name
  console.log(dog);
  dog.makeSound(); //call method


  
  //simplify the code using parameter in ts
  class Car{
    //parameter properties
    constructor(public name:string, public year:number , public model:string){

    }
    makeRegistration(){
        console.log('This is method');  
    }
  }
  //instance create
  const car1=new Car('Volvo',2020,'204D');
  console.log(car1);
  car1.makeRegistration()
  
  


}
