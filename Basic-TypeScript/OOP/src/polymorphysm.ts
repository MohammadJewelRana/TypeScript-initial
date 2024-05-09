{
  //polymorphism
  //same function ek ek somoy ek ek rup dekhay

  class Person {
    getSleep() {
      console.log("sleeping 5hrd per day");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log(`sleeping 7hr`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`sleeping 4hr`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
/////////////////////////////////////////////////


//main class
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //child class
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //function
  //same dunction bihinno vabe otput disse
  const getShapeArea = (params: Shape) => {
    console.log(params.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  getShapeArea(shape1);//call function
  getShapeArea(shape2);


}
