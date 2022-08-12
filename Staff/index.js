/**
 * localstoreage
 */


//end localstoreage

//add + output table list
const createStaffList = function() {
    var account = document.getElementById("tknv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dateicker= document.getElementById("datepicker").value;
    var standardSalary = document.getElementById("luongCB").value * 1;
    var position = document.getElementById("chucvu").value;
    var timework = document.getElementById("gioLam").value * 1;

    var staff = new STAFF(
        account,
        name,
        email,
        password,
        dateicker,
        standardSalary,
        position,
        timework,
    );
    return staff;

} 

function renderStaffList(arrES){
    var output = '';
    for (var i = 0 ; i<arrES.length ; i++){
        var currentStaff= arrES[i];

        var tableStaff= `
        <tr>
            <td>${currentStaff.account}</td>
            <td>${currentStaff.name}</td>
            <td>${currentStaff.email}</td>
            <td>${currentStaff.dateicker}</td>
            <td>${currentStaff.position}</td> 
           
            <td>
                <button data-toggle="modal" data-target="#myModal" class="btn btn-warning" onclick="editStaff(${currentStaff.account})">Edit</button>
                <button class="btn btn-danger" onclick="deleteStaff(${currentStaff.account})">delete</button>
            </td>
        </tr>
        `;
        output += tableStaff;
        //line 45 output error is not function 
        //line 46 output error is not function
    }
    document.getElementById("tableDanhSach").innerHTML = output;
};

var callform = function(staff){
    document.getElementById("tknv").value = staff.account;
    document.getElementById("name").value = staff.name;
    document.getElementById("email").value = staff.email;
    document.getElementById("password").value = staff.password;
    document.getElementById("datepicker").value = staff.dateicker;
    document.getElementById("luongCB").value = staff.standardSalary;
    document.getElementById("chucvu").value = staff.position;
    document.getElementById("gioLam").value = staff.timework;
};
var findElementByRank = function(type,array){
    return array.findIndex(function(staff){
        return staff.ranked() == type;
    })
}

const  searchStaffList = function(searchStaff){
    var output = '';
    for (var i = 0 ; i<searchStaff.length ; i++){
        var currentStaff= searchStaff[i];
        var tableStaff= `
        <tr>
            <td>${currentStaff.Account}</td>
            <td>${currentStaff.Name}</td>
            <td>${currentStaff.Email}</td>
            <td>${currentStaff.Dateicker}</td>
            <td>${currentStaff.Position}</td>
            
            <td>
                <button data-toggle="modal" data-target="#myModal" class="btn btn-warning" onclick="editStaff(${currentStaff.Account})">Edit</button>
                <button class="btn btn-danger" onclick="deleteStaff(${currentStaff.Account})">Delete</button>
            </td>
        </tr>
        `;
        output += tableStaff;
    }
    document.getElementById("tableDanhSach").innerHTML = output;
}