// Write your solution in this file!
let employee = {
    name: "Biboum Smith",
    streetAddress: "Rue 45 Samson St",
}

const updateEmployeeWithKeyAndValue = function (employee, key, value){
   const employeeDos = {...employee}
   employeeDos[key]=value
   return employeeDos
}

const destructivelyUpdateEmployeeWithKeyAndValue = function (employee, key, value){
    employee[key]=value
    return employee
}

const deleteFromEmployeeByKey = function (employee, key){
    const employeeDos = {...employee}
    delete employeeDos[key]
    return employeeDos
}

const destructivelyDeleteFromEmployeeByKey = function (employee, key){
    delete employee[key]
    return employee
}

