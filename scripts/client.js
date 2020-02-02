console.log("Mellow like jellelo")

//globals
let employeeSalaryList = [0];


$(document).ready(onReady);

function onReady(){
    console.log("cool like lemonade");
    $('#submitButton').on('click', displayEmployee);
    $("#tableBody").on('click', ".employee", ".deleteButton", deleteEmployee);
}
function displayEmployee(){
    console.log('in displayEmployee');
    // sending employee object to new table row
    let el = $('#tableBody');
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    let anualSalary = $('#salaryIn').val();
        el.append(`<tr class=employee><td>${firstName}</td><td>${lastName}</td>
        <td>${id}</td><td>${title}</td><td>${anualSalary}</td>
        <td><button class="deleteButton">X</button></td></tr>`);
    //add anual salary to array
    employeeSalaryList.push(anualSalary);
    console.log(employeeSalaryList);
    //show monthly salay in DOM
    displayMonthlySalary();
}//end displayEmployee

function deleteEmployee(){
    let el = $(this);
    console.log(el);
    el.remove();
}//end delete employee


function displayMonthlySalary(){
    console.log("Hold it now...");
    let changeToNumber = employeeSalaryList.map(Number);
    let aunalSum = changeToNumber.reduce((a, b) => a + b, 0);
    console.log(aunalSum);
    let monthlySum = aunalSum / 12
    console.log(monthlySum);
    let el = $('.monthlySalary');
    el.text(`${monthlySum}`);
}//end displayMonthlySalary









// function addEmployee(){
//     console.log('in addEmployee');
//     //get user input & create a new employee object
//     let newEmployee = {
//         firstName: $('#firstNameIn').val(),
//         lastName: $('#lastNameIn').val(),
//         id: $('#idIn').val(),
//         title: $('#titleIn').val(),
//         anualSalary: $('#salaryIn').val()
//     } // end newEmployee
//     console.log('adding:', newEmployee);
//     employeeList.push(newEmployee);
//     displayEmployee();
//     //monthlySalary();
// }//end addEmployee

// function displayEmployee(){
//     console.log('in displayEmployee');
//     // sending employee object to new table row
//     let el = $('#tableBody');
//     // loop through array
//     for(let i=0; i<employeeList.length; i++ ){
//         // append each item to DOM
//         el.append(`<tr class=employee><td>${employeeList[i].firstName}</td><td>${employeeList[i].lastName}</td>
//         <td>${employeeList[i].id}</td><td>${employeeList[i].title}</td>
//         <td>${employeeList[i].anualSalary}</td><td><button class="deleteButton">X</button></td></tr>`);
//     }
// }//end displayEmployee
