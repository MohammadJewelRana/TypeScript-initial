{
  //abstraction
  //get idea but real ta jani na...idea pai

  //two way
  //interface ...and abstract

  //idea passi
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implemenation
  //vehicle1 theke idea passi sevabe implement korte hobe
  class Car implements Vehicle1 {
    //from interface method
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stoping the car engine`);
    }
    move(): void {
      console.log(`i am moving the car engine`);
    }

    //extra method
    test() {
      console.log(`i am testing the car engine`);
    }
  }
  const volvoCar = new Car();
  volvoCar.startEngine();

  //abstract class

  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  //implementation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stoping the car engine`);
    }
    move(): void {
      console.log(`i am moving the car engine`);
    }
  }

  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();
}
