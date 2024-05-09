{
  //inheritance
  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(hour: number) {
      console.log(`${this.name} will sleep for ${hour}`);
    }
  }

  //use extends to access parent property
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address); //to pass data to parent
    }
  }

  //create instance
  const student1 = new Student("Jewel", 20, "BD");
  console.log(student1);
  student1.getSleep(5);

  //////////////////////////////////////////////////////////////////////

  //another class
  class Teacher extends Parent {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take class ${numberOfClass}`);
    }
  }
  const teacher1 = new Teacher("Jewel", 20, "BD", "Senior");
  console.log(teacher1);
  
  teacher1.takeClass(2);


}
