"use strict";
//normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
//set default value
function sub(num1 = 10, num2) {
    return num1 + num2;
}
sub(2, 2);
//arrow function
const addArrow = (num1, num2) => num1 + num2;
//method
//object er vitor e function thakle thake method bole
const poorUser = {
    name: 'Jewel',
    balance: 200,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    }
};
const arr = [1, 4, 2, 10];
const newArray = arr.map((ele) => ele * ele);
