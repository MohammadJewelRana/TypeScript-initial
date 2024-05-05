{
  //mapped types
  type AreaNumber = {
    height: number;
    width: number;
  };

  //here converted into string  all value type in area number type
  type AreaString = {
    // [index in 'height' | 'width'  ] : string
    [index in keyof AreaNumber]: string;
  };

  // look up type
  //here we get specific type of height property
  type Height = AreaNumber["height"];

  //generic use in mapped type
  type AreaString1<T> = {
    [index in keyof T]: T[index];
  };
  const area1: AreaString1<{ height: string; width: number }> = {
    height: "100",
    width: 23,
  };



}
