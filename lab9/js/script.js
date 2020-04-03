
/*
"use strict"
 */

//Question 1

const person = {
    name: "",
    dateOfBirth: "",
    getName: function () {
        return this.name;
    },
    setName: function (newName) {
        this.name = newName;
    }
};

let john = Object.create(person);
john.setName("John");
john.dateOfBirth = new Date("1998-12-10");

console.log("The Persons name is: " + john.getName());
console.log(john.name + " was born in " + john.dateOfBirth.getFullYear() + "-" + john.dateOfBirth.getMonth()+"-"+john.dateOfBirth.getDay());

//Question 2

let Employee = Object.create(person);
Employee = {
    salary: 0,
    hireDate: Date.now(),
    doJob: function (jobTitle) {
        console.log(this.name + " is a " + jobTitle + " who earns S" + this.salary);
    }
};

const anna = Object.create(Employee);
anna.name =  "Anna";
anna.salary = 249995.50;
anna.doJob("Programmer");

//Question 3

function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;

    this.toString = function () {
        console.log("{Name: " + this.name + ", DateOfBirth: " + this.dateOfBirth + "}");
    };
}

const peter = new Person("Peter", "November 10, 1985");
peter.toString();

//Question 4

//Please Refer to https://sinishawt.github.io/cs472_Web_Programing/lab4/
// a. https://sinishawt.github.io/cs472_Web_Programing/lab4/webform1/index.html?
// b. https://sinishawt.github.io/cs472_Web_Programing/lab4/webform2/index.html?