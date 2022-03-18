// Write your solution in this file!
const employee = {
    name : "frog",
    streetAddress : "neverland"
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newObj = {...employeeObj}; 
    newObj[key] = value;

    return newObj;
}

updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"); 

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value; 
    return employeeObj;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(employeeObj, key) {
    const newObj = {...employeeObj}; 
    delete newObj[key]; 
    return newObj;
}

deleteFromEmployeeByKey(employee, "name");

 destructivelyDeleteFromEmployeeByKey = (employeeObj, key) => {
    delete employeeObj[key];
    return employeeObj;
}

destructivelyDeleteFromEmployeeByKey(employee, "name");