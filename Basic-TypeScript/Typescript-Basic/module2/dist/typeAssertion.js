"use strict";
{
    //ami developer hisebe ts e jodi better type banate pari tahole setai type assertion
    //any type declare
    let anything;
    //then cant get any type
    anything = "Jewel";
    anything = true;
    //in this way we convert
    // (anything as string).charAt(2);
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertValue = parseFloat(value);
            return `The converted value is ${convertValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    console.log(typeof result1);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
