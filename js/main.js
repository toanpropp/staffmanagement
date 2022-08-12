var staffList = [];
var validator = new ValidatorStaff();
    //key 
    const staffList_Storeage = "staffList_Storeage";
function saveLocalStorage(staffList, staffList_Storeage){
    var listJson = JSON.stringify(staffList);
    localStorage.setItem(staffList_Storeage, listJson);
}
var ListJSON = localStorage.getItem(staffList_Storeage);

    if(ListJSON){
        staffList = JSON.parse(ListJSON);
        staffList = staffList.map(function(staff){
            return new STAFF(
                staff.account,
                staff.name,
                staff.email,
                staff.password,
                staff.dateicker,
                staff.standardSalary,
                staff.position,
                staff.timework,
                );

            
        });
        debugger;
        renderStaffList(staffList);
    }
    // window.onload = function () {
    //     //Lấy ra array sinh viên từ localstorage gán vào studenList
    //     staffList = getLocalStorage('arrES');

    //     if (staffList == undefined) {
    //         staffList = [];
    //     }
    //     debugger;
    //     renderStaffList(staffList);
    //   }

// function getLocalStorage(staffList_Storeage){
//     if(localStorage.getItem(staffList_Storeage)){
//         var listJson = localStorage.getItem(staffList_Storeage);
//         var staffList = JSON.parse(listJson);
//         return staffList;
//     }
//     return undefined;
    
// }


function addStaff(){
    var newStaff = createStaffList();
    var isvalid = true;
  
    var isvalidAccount = validator.checkEmpty("tknv","tbTKNV")&& validator.checkLength("tknv","tbTKNV",2,6);
    var isvalidName = validator.checkAlphabet("name","tbTen")&& validator.checkEmpty("name","tbTen");
    var isvalidEmail = validator.checkEmail("email","tbEmail")&& validator.checkEmpty("email","tbEmail");
    var isvalidPassword = validator.checkEmpty("password","tbMatKhau")&&validator.checkLength("password","tbMatKhau",6,16)&& validator.checkPassword("password","tbPassword");
    var isvalidDate= validator.checkdate("datepicker","tbNgay")&&validator.checkEmpty("datepicker","tbNgay");
    var isvalidSalary = validator.checkNumber("luongCB","tbLuongCB")&&validator.checkSala("luongCB","tb",10000000,20000000)&&validator.checkEmpty("luongCB","tb");
    var isvalidPosition= validator.checkPosition("")


    if(isvalid){
        staffList.push(newStaff);
        renderStaffList(staffList);
        document.getElementById("tbTKNV").value = "";
        saveLocalStorage();
    }
}



function deleteStaff(idclick){
    var indexdel = -1 ;
    for (var index =  staffList.length -1 ; index >=0 ; index--) {
        if (staffList[index].account == idclick) {
            staffList.splice(index, 1);
        }
    }
    renderStaffList(staffList);

}

function editStaff(idclick){
    var staffEdit = null ; //
    for (var index=0 ; index<staffList.length ; index++){
        if (staffList[index].account == idclick) {
            staffEdit = staffList[index];
            break;
        }
    }
    if (staffEdit !== null){
        document.querySelector('#tknv').value = staffEdit.account;
        document.querySelector('#name').value = staffEdit.name;
        document.querySelector('#email').value = staffEdit.email;
        document.querySelector('#password').value = staffEdit.password;
        document.querySelector('#datepicker').value = staffEdit.dateicker;
        document.querySelector('#luongCB').value = staffEdit.standardSalary;
        document.querySelector('#chucvu').value = staffEdit.position;
        document.querySelector('#gioLam').value = staffEdit.timework;
    }
    
}
function updateStaff(){
    var staffUpdate = createStaffList();
        document.querySelector('#tknv').value = staffUpdate.account;
        document.querySelector('#name').value = staffUpdate.name;
        document.querySelector('#email').value = staffUpdate.email;
        document.querySelector('#password').value = staffUpdate.password;
        document.querySelector('#datepicker').value = staffUpdate.dateicker;
        document.querySelector('#luongCB').value = staffUpdate.standardSalary;
        document.querySelector('#chucvu').value = staffUpdate.position;
        document.querySelector('#gioLam').value = staffUpdate.timework;
        

        let indexEdit = -1 ;
        for (var index = 0; index < staffList.length; index++) {
            if (staffList[index].account === staffUpdate.account) {
                indexEdit = index;
                break;
            }
        }
        if (indexEdit !== -1) {
            staffList[indexEdit].account = staffUpdate.account;
            staffList[indexEdit].email = staffUpdate.email;
            staffList[indexEdit].password = staffUpdate.password;
            staffList[indexEdit].dateicker = staffUpdate.dateicker;
            staffList[indexEdit].standardSalary = staffUpdate.standardSalary;
            staffList[indexEdit].position = staffUpdate.position;
            staffList[indexEdit].timework = staffUpdate.timework;
            renderStaffList(staffList);

        }
}

//search staff
var searchStaff = function () {
    var tuKhoa = document.querySelector('#searchName').value;
    tuKhoa = removeVietnameseTones(tuKhoa);
    var output = [];
    for (var index = 0; index < staffList.length; index++) {
        var Namestaff = removeVietnameseTones(staffList[index].account);
        if (Namestaff.search(tuKhoa) != -1 || staffList[index].account == tuKhoa) {
            //Tìm thấy => add object tại vị trí đó vào output
            output.push(staffList[index].account);
          }
    }
    renderStaffList(output);
}
    document.querySelector('#searchName').oninput = searchStaff;
    document.querySelector('#btnTimNV').oninput = searchStaff;
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
  }
