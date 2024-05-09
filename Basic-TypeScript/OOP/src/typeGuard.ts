{
  //type guard

  //typeof
  type Alphanumeric = string | number;
  const add = (x: Alphanumeric, y: Alphanumeric): Alphanumeric => {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else {
      return x.toString() + y.toString();
    }
  };
  const result1 = add(2, "3");
  
///////////////////////////////////////////////////////
  //in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "Admin";
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {//in guard
      console.log(`my name is ${user.name} and role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Jewel",
  };
  const adminUser: AdminUser = {
    name: "ADmin vai",
    role: "Admin",
  };
  getUser(normalUser);
  getUser(adminUser);
}
