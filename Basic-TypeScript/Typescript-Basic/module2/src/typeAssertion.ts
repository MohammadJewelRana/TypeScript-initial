{
  //ami developer hisebe ts e jodi better type banate pari tahole setai type assertion

  //any type declare
  let anything: any;

  //then cant get any type
  anything = "Jewel";
  anything = true;

  //in this way we convert
  // (anything as string).charAt(2);

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value);
      return `The converted value is ${convertValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  console.log(typeof result1);


  type CustomError={
   message : string;
  }

  try{

  }catch(error){
    console.log((error as CustomError).message);
    
  }
  



}
