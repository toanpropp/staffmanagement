var ValidatorStaff = function(){

 this.checkEmpty=function(idtaget,idMassage){
    var valueTocheck = document.getElementById(idtaget).value.trim();
    if (valueTocheck ==""){
        document.getElementById(idMassage).innerText="ban khong duoc bo trong"
        console.log("empty")
        return false;
        
    }else{
        document.getElementById(idMassage).innerText="";
        return true;
    }
}


this.checkLength = function(idtaget,idMassage , min ,max){
    var valueTocheck = document.getElementById(idtaget).value.trim();
    if (valueTocheck.length >= min && valueTocheck.length <= max){
        document.getElementById(idMassage).innerText="";
        return true;
    }else{
        document.getElementById(idMassage).innerText=" hay nhap ki tu tu ${min} den ${max}";
        return false;
    }
}


this.checkAlphabet=function(idtaget,idMassage){
    var valueTocheck = document.getElementById(idtaget).value.trim();
    var validAlphabet = /^[A-Za-z]+$/;
    if (validAlphabet.test(valueTocheck)){
        document.getElementById(idMassage).innertext = "";
        return true;
    }else{
        document.getElementById(idMassage).innerText="ki tu khong hop le";
        return false;
    }
}

this.checkEmail = function(idtaget,idMassage){
    var valueTocheck = document.getElementById(idtaget).value.trim();
    var validEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validEmail.test(valueTocheck)){
        document.getElementById(idMassage).innerText ="";
        return true;
    }else {
        document.getElementById(idMassage).innerText="email khong hop le";
        return false
    }
};
this.checkPassword = function(idtaget,idMassage){
    var valueTocheck = document.getElementById(idtaget).value.trim();
    var validPass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    if (validPass.test(valueTocheck)){
        document.getElementById(idMassage).innertext = "";
        return true;
    }else{
        document.getElementById(idMassage).innerText="phai co it nhat mot ki tu viet hoa va 1 ki tu dat biet";
        return false;
    }
}
this.checkdate = function(idtaget,idMassage){
    var valueTocheck = document.getElementById(idtaget).value.trim();
    var validdate = /^\d{2}\/\d{2}\/\d{4}$/;
    if (validdate.test(valueTocheck)){
        document.getElementById(idMassage).innertext = "";
        return true;
    }else{
        document.getElementById(idMassage).innerText="mm/dd/yyyy";
        return false;
    }


}

this.checkNumber = function(idtaget,idMassage){
    var valueTocheck = document.getElementById(idtaget).value.trim()*1;
    var validNumber = /^[0-9]+$/;
    if (validNumber.test(valueTocheck)){
        document.getElementById(idMassage).innertext = "";
        return true;
    }else{
        document.getElementById(idMassage).innerText="chi dien so "
        return false
    }
}

this.checkSala = function(idtaget,idMassage , min ,max){
    var valueTocheck = document.getElementById(idtaget).value.trim()*1;
    if (valueTocheck>= min && valueTocheck<=max){
        document.getElementById(idMassage).innertext = "";
        return true;
    }else{
        document.getElementById(idMassage).innerText="hay nhap ki tu tu ${min} den ${max}"
        return false
    }
}
}