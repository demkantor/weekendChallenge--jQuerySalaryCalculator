
//globals
let employeeSalaryList = [0];


$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', displayEmployee);
    $("#tableBody").on('click', ".employee", ".deleteButton", deleteEmployeeSalary);
}

function deleteEmployee(){
    let el = $(this);
    el.remove();
}//no longer needed as of now but being i kinda hacked the next bit ugly like ill hang onto it

function deleteEmployeeSalary(){

    //finding the value of salary to remove from monthly sum
    let salaryToRemove = $(this).closest('tr').find('td:eq(4)').text();
    //console.log(salaryToRemove);

    //force string into number and turn neagtive. then push negative value to array
    let negative = Math.abs(salaryToRemove) * -1;
    employeeSalaryList.push(negative);

    //remove row from table
    let el = $(this);
    el.remove();

    //fake removal until i find the actual index
      let changeToNumber = employeeSalaryList.map(Number);
      let aunalSum = changeToNumber.reduce((a, b) => a + b, 0);
      let monthlySum = aunalSum / 12
      let fixedMonthlySum = (Math.round(monthlySum * 100) / 100).toFixed(2);
      let potato = $('.monthlySalary');
      potato.text(`${fixedMonthlySum}`);
      if (monthlySum > 20000){
        $('.monthlySalary').css('color', 'red');
    } else {
        $('.monthlySalary').css('color', 'black');
    }
    //now go and delete the row
}//remove salary of deleted employee from total

function displayEmployee(){
    //be sure all fields are filled in
    if (document.getElementById("firstNameIn").value === ""
     || document.getElementById("lastNameIn").value === ""
     || document.getElementById("idIn").value === ""
     || document.getElementById("titleIn").value === ""
     || document.getElementById("salaryIn").value === ""){
       alert("Please be sure to fill in all fields");
   } else {
    // sending employee object to new table row
    let el = $('#tableBody');
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    let anualSalary = $('#salaryIn').val();
        el.append(`<tr class=employee><td>${firstName}</td><td>${lastName}</td>
        <td>${id}</td><td>${title}</td><td class="money">${anualSalary}</td>
        <td><button class="deleteButton">X</button></td></tr>`);
    //add anual salary to array
    employeeSalaryList.push(anualSalary);
    //show monthly salay in DOM
    displayMonthlySalary();
   }
   //reset inputs
    $("#firstNameIn").val('');
    $("#lastNameIn").val('');
    $("#idIn").val('');
    $("#titleIn").val('');
    $("#salaryIn").val('');
}//end displayEmployee

function displayMonthlySalary(){
    let changeToNumber = employeeSalaryList.map(Number);
    let aunalSum = changeToNumber.reduce((a, b) => a + b, 0);
    let monthlySum = aunalSum / 12
    let fixedMonthlySum = (Math.round(monthlySum * 100) / 100).toFixed(2);
    let el = $('.monthlySalary');
    el.text(`${fixedMonthlySum}`);
    if (monthlySum > 20000){
        $('.monthlySalary').css('color', 'red');
    }
}//end displayMonthlySalary


