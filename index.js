// Code your solutions in this file
employee = ['Ada','Brendan','Ali']

function printBadges(employee) {
  for (let i=0; i < employee.length; i++){
  console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
}
  return employee;
}
printBadges(employee);
