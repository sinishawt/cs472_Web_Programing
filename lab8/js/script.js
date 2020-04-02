const Employee = (function() {
    //private
    let name;
    let age;
    let salary;

    //public
    const setAge = function(newAge){
        age = newAge;
    };

    const setSalary = function(newSalary){
        salary = newSalary;
    };

    const setName = function(newName){
        name = newName;
    };

    //private methods
    const getAge = function(){
        return age;
    };

    const getSalary = function(){
        return salary;
    };
    const getName = function(){
        return name;
    };
    const increaseSalary = function (percentage) {
       return getSalary() + (getSalary() * percentage)/100;
    }
    const incrementAge = function(){
        return getAge() + 1;
    }

    return{
        setAge:setAge,
        setSalary:setSalary,
        setName:setName,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge
    };

})();

Employee.setAge(32);
console.log(Employee.incrementAge()); //33

Employee.setSalary(1024);
console.log(Employee.increaseSalary(50)); //1536

// Employee.extension = function () {
//     let address;
//
//     const setAddress = function (newAddress) {
//         address = newAddress;
//     }
//
//     const getAddress = function () {
//         return address;
//     }
//
// };


Employee.address;
Employee.setAddress = function (newAddress) {
    Employee.address = newAddress;
}

Employee.getAddress = function () {
    return Employee.address;
}

Employee.setAddress("Fairfield");
console.log(Employee.getAddress()); //Fairfield




