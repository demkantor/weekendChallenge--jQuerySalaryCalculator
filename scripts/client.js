
//globals
let employeeSalaryList = [0];


$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', displayEmployee);
    $("#tableBody").on('click', ".employee", ".deleteButton", deleteEmployee);
}

function deleteEmployee(){
    deleteEmployeeSalary();
    let el = $(this);
    el.remove();
}//end delete employee

function deleteEmployeeSalary(){
    
    //just testing to find the value so i can find index in list array to remove
    let txt = $(this).parents('tr').find("td:eq(1)").text();
    console.log(txt);
    let tuna = $(this).parents('tr').find("td:eq(1)").text();
    console.log(tuna);
    let taco = $(this).closest('tr').find('td:eq(1)').text();
    console.log(taco);
    let el = $(this).parent();
    console.log(el);
    let moneyName = document.getElementsByClassName('.employee');
    console.log(moneyName);
    let molla = document.getElementById('tableBody').getElementsByClassName('money');
    console.log(molla);

    //fake removal until i find the actual index
      employeeSalaryList.splice(1,1);
      let changeToNumber = employeeSalaryList.map(Number);
      let aunalSum = changeToNumber.reduce((a, b) => a + b, 0);
      let monthlySum = aunalSum / 12
      let fixedMonthlySum = (Math.round(monthlySum * 100) / 100).toFixed(2);
      let potato = $('.monthlySalary');
      potato.text(`${fixedMonthlySum}`);
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


