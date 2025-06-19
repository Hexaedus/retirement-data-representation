let ageString = prompt("Current Age...");
let salaryString = prompt("Current Salary...");
let salary = parseInt(salaryString);
let age = parseInt(ageString);

let dataArray = [];

function workingOut() {
  let total = 0;
  let allData = [];

  let agePercent = () => {
    return age / 6 / 100 + 1;
  };
  for (age; age <= 90; age++) {
    let addedYearly = salary * agePercent();
    let addedYearlyActual = (addedYearly -= salary);
    total += addedYearlyActual;

    allData.push({
      age: age,
      salary: salary.toFixed(3),
      Per_Mult: agePercent().toFixed(2),
      added_per_year: addedYearlyActual.toFixed(3),
      total: total.toFixed(3),
    });

    if (age <= 45) {
      salary *= 1.03;
    } else if (age <= 60) {
      salary *= 1.015;
    } else if (age <= 68) {
      salary *= 0.94;
    } else if (age > 68) {
      salary = 0;
    }
  }
  return allData;
}
    
const data = workingOut();
console.table(data);
