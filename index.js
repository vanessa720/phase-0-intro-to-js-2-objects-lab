let employee = {
    name : 'arnold'}

function updateEmployeeWithKeyAndValue(employee,key,value){
  delete employee.key;
  let copyemployee= {... employee};
  copyemployee[key] = value ;
  console.log(copyemployee);
  console.log(employee.value);
  return copyemployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value) {
  employee[key] = value ;
  console.log(employee);
  return employee ;
  }


function deleteFromEmployeeByKey(employee,key){
  let cemployee= { ...employee};
  delete cemployee[key];
  return cemployee;

  }

function destructivelyDeleteFromEmployeeByKey(employee,key){
  let coemployee= { ...employee};
  console.log(employee);
  delete employee[key];
  delete coemployee[key];
  console.log(coemployee);
  return employee;
  }