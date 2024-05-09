{
  //union
  //hoy eta nahoy oita
  type Frontend = "new developer" | "senior developer";
  type FullStack = "Frontend" | "Expert";
  type Developer = Frontend | FullStack;
  const newDeveloper: Frontend = "junior developer";

  type User = {
    name: string;
    email?: string; //optional chaining
    gender: "Male" | "Female";
    blood: "A+" | "B+" | "AB+";
  };
  const user1: User = {
    name: "Jewel",
    gender: "Female",
    blood: "B+",
  };

  //intersection
  //common jinish gula

  type FrontendDeveloper = {
    skills: string[];
    designation: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  //new type declare jekhane ager duita type e and  or intersection kora hosse
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  //ekhane skill jehetu common 2ta type ei silo tai skill merge hoye jabe and bakigula as it is bose jabe
  const fullStack: FullStackDeveloper = {
    skills: ["Html", "Express"],
    designation: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
