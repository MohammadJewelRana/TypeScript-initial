{

    //instance of guard
    class Animal{
        constructor(public name:string,public species:string){
            this.name=name;
            this.species=species;
        }
        makeSound(){
            console.log('sound');
        }
    }

    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species);
        }
        makeBark(){
            console.log('I am barking');
            
        }
    }
    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species);
        }
        makeMeaw(){
            console.log('I am meawing');   
        }
    }

    const getAnimal=(animal:Animal)=>{
        if(animal instanceof Dog){
            animal.makeBark();
            animal.name='Kukur';
            
        }else if(animal instanceof Cat){
            animal.makeMeaw();
        }
        else{
            animal.makeSound()
        }

    }

    const dog=new Dog('Dog Bhai','dog')
    const cat=new Cat('Cat Bhai','cat')
    getAnimal(cat)
    


    


    



}